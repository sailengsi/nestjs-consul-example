import { Controller, Get } from '@nestjs/common';
import { ServiceTagService } from './service-tag.service';

@Controller()
export class ServiceTagController {
  constructor(private readonly serviceTagService: ServiceTagService) {}

  @Get()
  getHello(): string {
    return this.serviceTagService.getHello();
  }
}
