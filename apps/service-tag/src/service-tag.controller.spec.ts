import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTagController } from './service-tag.controller';
import { ServiceTagService } from './service-tag.service';

describe('ServiceTagController', () => {
  let serviceTagController: ServiceTagController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceTagController],
      providers: [ServiceTagService],
    }).compile();

    serviceTagController = app.get<ServiceTagController>(ServiceTagController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceTagController.getHello()).toBe('Hello World!');
    });
  });
});
