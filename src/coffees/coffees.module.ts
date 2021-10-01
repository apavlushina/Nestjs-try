import { Module } from '@nestjs/common';

@Module({ controllers: [CoffeesController], providers: [CoffeesService]})
export class CoffeesModule {}
