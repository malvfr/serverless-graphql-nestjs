import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Book } from './books.model';

@Resolver('Book')
export class BooksResolver {
  private books: Book[] = [
    {
      id: 1,
      title: 'Memórias póstumas de Brás Cubas',
      pageNumber: 238,
      published: true,
      author: {
        id: 10,
        firstName: 'Amelia',
        lastName: 'Kulio',
      },
      copies: 5789744
    },
    {
      id: 2,
      title: 'Memórias de um Sargento de Milícias',
      pageNumber: 164,
      published: false,
      author: {
        id: 11,
        firstName: 'Jacob',
        lastName: 'Smith',
      },
      copies: 28
    },
    {
      id: 3,
      title: 'O Ateneu',
      pageNumber: 675,
      published: true,
      author: {
        id: 12,
        firstName: 'Tamara',
        lastName: 'Einhart',
      },
      copies: 3793688
    },
    {
      id: 4,
      published: false,
      author: {
        id: 13,
        lastName: 'Lucia',
      },
      copies: 0
    },
  ];

  @Query(returns => [Book])
  findAllBooks(): Book[] {
    return this.books;
  }

  @Query(returns => [Book])
  findAllPublishedBooks(): Book[] {
    const tempBooks = this.books.filter(book => book.published === true);
    return tempBooks;
  }

  @Query(returns => [Book])
  findLongBooks(): Book[] {
    const tempBooks = this.books.filter(book => book.pageNumber > 400);
    return tempBooks;
  }

  @Query(returns => Book)
  findBook(@Args('id') id: number): Book {
    return this.books.find(book => book.id === id);
  }

  @Mutation(returns => Book)
  createBook(@Args('title') title: string): Book {
    const newBook: Book = {
      id: this.books.length,
      title: title,
      copies: 0
    };
    this.books.push(newBook);
    return newBook;
  }

  @Mutation(returns => Book)
  updateBook(@Args('book') book: Book): Book {
    this.books[book.id] = book;
    return this.books[book.id];
  }

  @Mutation(returns => Book)
  deleteBook(@Args('id') id: number): Book {
    const deletedBook = this.books.find(book => book.id === id);
    this.books = this.books.filter(book => book.id !== id);
    return deletedBook;
  }

  @Mutation(returns => [Book])
  deleteAuthorsBooks(@Args('authorId') id: number): Book[] {
    return this.books.filter(book => book.author.id === id);
  }
}
