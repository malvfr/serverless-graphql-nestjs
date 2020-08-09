import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';

@Module({
  providers: [BooksResolver],
  exports: [BooksResolver],
})
export class BooksModule {}
