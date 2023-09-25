import { NestFactory } from '@nestjs/core';
import { ServiceArticleModule } from './service-article.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceArticleModule);
  await app.listen(3000);
}
bootstrap();
