import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    const res = [
      'SDA','DASD','SDADA'
    ]
    return res;
  }
}
