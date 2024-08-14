import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  detail(): string {
    return 'Here are Zoo details!';
  }
}
