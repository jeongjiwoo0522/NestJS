import { Module } from '@nestjs/common';
import { CatsController } from './cats.contoller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
