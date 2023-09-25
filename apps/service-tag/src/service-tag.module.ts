import { Module } from '@nestjs/common';
import { ServiceTagController } from './service-tag.controller';
import { ServiceTagService } from './service-tag.service';

@Module({
  imports: [],
  controllers: [ServiceTagController],
  providers: [ServiceTagService],
})
export class ServiceTagModule {}
