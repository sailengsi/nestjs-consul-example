import { Test, TestingModule } from '@nestjs/testing';
import { ServiceCategoryController } from './service-category.controller';
import { ServiceCategoryService } from './service-category.service';

describe('ServiceCategoryController', () => {
  let serviceCategoryController: ServiceCategoryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceCategoryController],
      providers: [ServiceCategoryService],
    }).compile();

    serviceCategoryController = app.get<ServiceCategoryController>(ServiceCategoryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceCategoryController.getHello()).toBe('Hello World!');
    });
  });
});
