import { Test, TestingModule } from '@nestjs/testing';
import { ServiceArticleController } from './service-article.controller';
import { ServiceArticleService } from './service-article.service';

describe('ServiceArticleController', () => {
  let serviceArticleController: ServiceArticleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceArticleController],
      providers: [ServiceArticleService],
    }).compile();

    serviceArticleController = app.get<ServiceArticleController>(ServiceArticleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceArticleController.getHello()).toBe('Hello World!');
    });
  });
});
