import { Module } from '@nestjs/common';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [PaymentsModule],
  controllers: [PaymentsController],
  providers: [],
})
export class AppModule {}
