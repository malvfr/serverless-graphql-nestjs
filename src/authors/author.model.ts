import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Book } from '../books/books.model';

@ObjectType()
export class Author {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    firstName?: string;

    @Field({ nullable: true })
    lastName?: string;

    @Field(type => [Book], { nullable: 'itemsAndList' })
    posts?: Book[];
}