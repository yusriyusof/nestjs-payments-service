import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsController } from './payments.controller';

describe('PaymentsController', () => {
  let paymentController: PaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsController],
    }).compile();

    paymentController = module.get<PaymentsController>(PaymentsController);
  });

  it('should return a status of declined or approved', () => {
    const status = paymentController.verify();
    expect(status).toHaveProperty('status');
    expect(['declined', 'approved']).toContain(status.status);
  });
});
