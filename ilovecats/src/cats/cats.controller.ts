import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('cats')
export class CatsController {
  @Get('names')
  findAll(@Res() response) {
    response.status(200).send('This action returns all the cats')
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return `This action returns #${id} cat`
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body
  }
}