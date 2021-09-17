import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats:  Cat[] = [
    {
      id: 1,
      name: 'Moon',
      color: 'grey',
      hobbies: ['sleep', 'play', 'online-meetings']
    }
  ]

  findAll() {
    return this.cats;
  }

  findOne(id: string) {
    const cat = this.cats.find(item => item.id === +id);
    if (!cat) {
      //throw new HttpException(`This # ${id} is not found`, HttpStatus.NOT_FOUND)
      throw new NotFoundException(`This # ${id} is not found`)
    }
    return cat
  }

  create(createCatDto: any) {
    this.cats.push(createCatDto);
    return createCatDto
  }

  update(id: string, updateCatDto: any) {
    const existingCat = this.findOne(id);
    if (existingCat) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.cats.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.cats.splice(coffeeIndex, 1);
    }
  }
}

