import { Test, TestingModule } from '@nestjs/testing';
import { KafkaService } from '../impl/components/kafka/kafka.service';
import { ConfigService } from '@nestjs/config';
import { Producer } from 'kafkajs';
import { BadRequestException } from '@nestjs/common';

jest.mock('kafkajs', () => ({
  Kafka: jest.fn().mockImplementation(() => ({
    producer: jest.fn().mockReturnValue({
      connect: jest.fn(),
      disconnect: jest.fn(),
      send: jest.fn(),
    }),
  })),
  logLevel: {
    INFO: 2,
  },
  Partitioners: {
    LegacyPartitioner: jest.fn(),
  },
}));

describe('KafkaService', () => {
  let service: KafkaService;
  let mockProducer: Producer;
  let mockConfigService: Partial<ConfigService>;

  beforeEach(async () => {
    mockProducer = {
      connect: jest.fn().mockResolvedValue(undefined),
      disconnect: jest.fn().mockResolvedValue(undefined),
      send: jest.fn().mockResolvedValue(undefined),
    } as unknown as Producer;

    mockConfigService = {
      get: jest.fn((key: string) => {
        switch (key) {
          case 'kafka.brokers':
            return ['broker1', 'broker2'];
          case 'kafka.clientId':
            return 'test-client-id';
          case 'kafka.username':
            return 'test-username';
          case 'kafka.password':
            return 'test-password';
          case 'kafka.topic':
            return 'test-topic';
          default:
            return null;
        }
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [KafkaService, { provide: ConfigService, useValue: mockConfigService }],
    }).compile();

    service = module.get<KafkaService>(KafkaService);

    (service as any).producer = mockProducer;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('onModuleInit', () => {
    it('should connect the producer', async () => {
      await service.onModuleInit();
      expect(mockProducer.connect).toHaveBeenCalled();
    });
  });

  describe('connectProducer', () => {
    it('should log success message on successful connection', async () => {
      const consoleLogSpy = jest.spyOn(console, 'log');
      await service['connectProducer']();
      expect(consoleLogSpy).toHaveBeenCalledWith('Producer trx connected successfully');
    });

    it('should log error message on failed connection', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error');
      mockProducer.connect = jest.fn().mockRejectedValue(new Error('Connection error'));
      await service['connectProducer']();
      expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to connect producer trx ', expect.any(Error));
    });
  });

  describe('sendMessage', () => {
    it('should send message to Kafka successfully', async () => {
      const consoleLogSpy = jest.spyOn(console, 'log');
      const message = { key: 'value' };
      await service.sendMessage(message);
      expect(mockProducer.send).toHaveBeenCalledWith({
        topic: 'test-topic',
        messages: [{ value: JSON.stringify(message), key: 'test-client-id' }],
      });
      expect(consoleLogSpy).toHaveBeenCalledWith('Sending trx message to Kafka:', {
        message: JSON.stringify(message),
      });
      expect(consoleLogSpy).toHaveBeenCalledWith('Message trx sent successfully');
    });

    it('should throw BadRequestException on send failure', async () => {
      mockProducer.send = jest.fn().mockRejectedValue(new Error('Send error'));
      await expect(service.sendMessage({ key: 'value' })).rejects.toThrow(BadRequestException);
    });
  });

  describe('onModuleDestroy', () => {
    it('should disconnect the producer', async () => {
      await service.onModuleDestroy();
      expect(mockProducer.disconnect).toHaveBeenCalled();
    });
  });

  describe('checkKafkaConnection', () => {
    it('should return "connected" if connection is successful', async () => {
      const result = await service.checkKafkaConnection();
      expect(result).toBe('connected');
    });

    it('should return "disconnected" if connection fails', async () => {
      mockProducer.connect = jest.fn().mockRejectedValue(new Error('Connection error'));
      const result = await service.checkKafkaConnection();
      expect(result).toBe('disconnected');
    });
  });
});
