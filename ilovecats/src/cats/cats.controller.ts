import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery
    return `This action returns all the cats. Limit ${limit}, offset: ${offset}`
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return `This action returns #${id} cat`
  }

  @Post()
  create(@Body() body) {
    return body
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return`This action updates #${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return`This action removes #${id} cat`
  }
}