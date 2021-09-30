import { Controller, Get, Post,  Param, Body, HttpCode, HttpStatus, Patch, Delete, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery
    return `hello there ${limit} ${offset}`
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `return one ${id}`
  }

  @Post()
  create(@Body() body) {
    return body
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return body
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return id
  }
}
