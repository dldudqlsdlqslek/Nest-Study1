import { Controller, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';
import { ForbiddenException } from '../exception/forbidden.exception';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

    @Get('custom_exception')
    @UseFilters(HttpExceptionFilter)
    async customExceptionTest(){
        throw new ForbiddenException();
    }

    @Get('exception')
    async exceptionTest() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
}
