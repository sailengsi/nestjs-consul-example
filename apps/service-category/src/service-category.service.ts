import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceCategoryService {
  getHello(): string {
    return 'Hello World，The is Category Service!';
  }
}
