import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('names')
  findAll() {
    return 'This action returns all the cats'
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return `This action returns #${id} cat`
  }
}
