import { NestFactory } from '@nestjs/core';
import { ServiceTagModule } from './service-tag.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceTagModule);
  await app.listen(3000);
}
bootstrap();
