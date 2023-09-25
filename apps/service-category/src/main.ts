import { NestFactory } from '@nestjs/core';
import { ServiceCategoryModule } from './service-category.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceCategoryModule);
  await app.listen(3003);
}
bootstrap();
