import { Module } from '@nestjs/common';
import { ServiceArticleController } from './service-article.controller';
import { ServiceArticleService } from './service-article.service';

@Module({
  imports: [],
  controllers: [ServiceArticleController],
  providers: [ServiceArticleService],
})
export class ServiceArticleModule {}
