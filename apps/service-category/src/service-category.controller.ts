import { Controller, Get } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';

@Controller()
export class ServiceCategoryController {
  constructor(private readonly serviceCategoryService: ServiceCategoryService) {}

  @Get()
  getHello(): string {
    return this.serviceCategoryService.getHello();
  }
}
