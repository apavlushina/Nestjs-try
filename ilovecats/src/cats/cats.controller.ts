import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { CatsService } from './cats.service';

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
  create(@Body() body) {
    return this.catsSevice.create(body)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.catsSevice.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsSevice.remove(id)
  }
}