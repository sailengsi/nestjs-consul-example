import { Controller, Get } from '@nestjs/common';
import { ServiceArticleService } from './service-article.service';

@Controller()
export class ServiceArticleController {
  constructor(private readonly serviceArticleService: ServiceArticleService) {}

  @Get()
  getHello(): string {
    return this.serviceArticleService.getHello();
  }
}
