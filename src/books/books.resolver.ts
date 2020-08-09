import { Resolver, Mutation } from '@nestjs/graphql';
import { Args, ResolveField, Parent, Query } from '@nestjs/graphql';

interface Book {
  id: number;
  title: string;
}

@Resolver('Author')
export class BooksResolver {
  private books: Book[] = [
    {
      id: 1,
      title: 'Memórias póstumas de Brás Cubas',
    },
    {
      id: 2,
      title: 'Memórias de um Sargento de Milícias',
    },
    {
      id: 3,
      title: 'O Ateneu',
    },
  ];

  @Query('books')
  findAllBooks(): Book[] {
    return this.books;
  }

  @Query('findBook')
  findBook(@Args('id') id: number): Book {
    return this.books.find(book => book.id === id);
  }

  @Mutation()
  createBook(@Args('title') title: string): Book {
    const newBook = { id: this.books.length, title };
    [...this.books, newBook];
    return newBook;
  }
}
