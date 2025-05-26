import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

//  https://codegear.tistory.com/53


@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): string {
    return this.appService.getTestMessage();
  }

  @Get('request')
  getRequest(@Req() request: Request): string {
    return `Request method: ${request.method}, Request URL: ${request.url}`;
  }

  @Get(':id')
  getById(@Param() params): string {
    const id = params.id;
    return `You requested the resource with ID: ${id}`;
  }

  @Get('2/:id')
  getById2(@Param('id') id: string): string {
    return `You requested the resource with ID: #${id}`;
  }

}
