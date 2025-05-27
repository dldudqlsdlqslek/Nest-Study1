import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Module({
  controllers: [CatsController],
  providers: [CatsService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
  
})
export class CatsModule {}
