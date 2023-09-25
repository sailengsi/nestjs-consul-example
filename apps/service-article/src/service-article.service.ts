import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceArticleService {
  getHello(): string {
    return 'Hello World, The Is Article Service!';
  }
}
