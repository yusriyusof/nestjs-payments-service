import { Controller, Post } from '@nestjs/common';

export interface VerifyResponse {
  status: string;
}

@Controller('payments')
export class PaymentsController {
  @Post('verify')
  verify(): VerifyResponse {
    const random = Math.round(Math.random());
    let res: VerifyResponse;

    switch (random) {
      case 0:
        res = { status: 'declined' };
        break;
      case 1:
        res = { status: 'approved' };
        break;
    }

    return res;
  }
}
