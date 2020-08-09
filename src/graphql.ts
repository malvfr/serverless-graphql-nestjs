
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Book {
    id: number;
    title: string;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    findBook(id: number): Book | Promise<Book>;
}

export interface IMutation {
    createBook(title: string): Book | Promise<Book>;
}
