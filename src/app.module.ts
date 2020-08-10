import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      playground: {
        endpoint: process.env.STAGE === 'dev' ? '/dev/graphql' : 'graphql',
      },
    }),
    BooksModule,
  ],
})
export class AppModule {}
