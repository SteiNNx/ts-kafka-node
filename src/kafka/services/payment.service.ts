import { PaymentSchema } from '../../schemas/payment.schema';
import { KafkaMessage } from '../../messages/kafka.messages';

export class PaymentService {
  public async processPayment(message: KafkaMessage): Promise<void> {
    const paymentData = PaymentSchema.parse(message);
    // Lógica para procesar el pago
    console.log('Processing payment:', paymentData);
  }
}
