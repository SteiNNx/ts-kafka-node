import { PaymentService } from '../services/payment.service';
import { KafkaMessage } from '../../messages/kafka.messages';

export class PaymentController {
  private paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  public async handleMessage(message: KafkaMessage): Promise<void> {
    try {
      await this.paymentService.processPayment(message);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  }
}
