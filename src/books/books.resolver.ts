import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Book } from './books.model';

@Resolver('Book')
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

  @Query(returns => [Book])
  findAllBooks(): Book[] {
    return this.books;
  }

  @Query(returns => Book)
  findBook(@Args('id') id: number): Book {
    return this.books.find(book => book.id === id);
  }

  @Mutation(returns => Book)
  createBook(@Args('title') title: string): Book {
    const newBook = { id: this.books.length, title };
    [...this.books, newBook];
    return newBook;
  }
}
