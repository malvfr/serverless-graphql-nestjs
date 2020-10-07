import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/authors/author.model';

@ObjectType()
export class Book {
  @Field(type => Int)
  id: number;

  @Field({ nullable: false, description: 'Book title' })
  title?: string;

  @Field({ nullable: false, description: 'Book title' })
  pageNumber?: number;

  @Field({ nullable: false, description: 'Book title' })
  published?: boolean;

  @Field({ nullable: false, description: 'Book title' })
  author?: Author;

  @Field({ nullable: false, description: 'Book title' })
  copies: number;
}
