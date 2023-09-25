import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceTagService {
  getHello(): string {
    return 'Hello World，The is Tag Service!';
  }
}
