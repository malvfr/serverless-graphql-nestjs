import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: {
        endpoint: process.env.STAGE === 'dev' ? '/dev/graphql' : 'graphql',
      },
    }),
    BooksModule,
  ],
})
export class AppModule {}
