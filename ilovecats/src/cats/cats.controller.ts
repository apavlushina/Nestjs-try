import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { CreateTracingOptions } from 'node:trace_events';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsSevice: CatsService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery
    //return `This action returns all the cats. Limit ${limit}, offset: ${offset}`
    return this.catsSevice.findAll() 
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
   // return `This action returns #${id} cat`
   return this.catsSevice.findOne(id)
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto, createCatDto instanceof CreateCatDto)
    return this.catsSevice.create(createCatDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsSevice.update(id, updateCatDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsSevice.remove(id)
  }
}