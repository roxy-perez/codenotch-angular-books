import { Injectable } from "@angular/core";
import { Book } from "../models/book";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  private books: Book[] = [];

  constructor() {}

  public getAll(): Book[] {
    return this.books;
  }

  public getOne(idBook: number) {
    return this.books.find((book) => book.idBook === idBook);
  }

  public add(book: Book) {
    this.books.push(book);
  }

  public delete(idBook: number): boolean {
    const index = this.books.findIndex((book) => book.idBook === idBook);
    if (index >= 0) {
      this.books.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}
