import { Injectable } from '@nestjs/common';
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
    return this.cats.find(item => item.id === +id);
  }

  create(createCoffeeDto: any) {
    this.cats.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
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

