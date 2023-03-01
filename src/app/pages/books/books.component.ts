import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book";
import { BooksService } from "../../shared/book.service";
@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  outputBooks: Book[] = [];
  idBookRequested: number = null;

  constructor(public bookService: BooksService) {}

  ngOnInit(): void {
    this.books = this.bookService.getAll();
    this.outputBooks = this.books;
  }

  searchBooks(): void {
    if (this.idBookRequested === null) {
      this.outputBooks = this.bookService.getAll();
    } else {
      const requestedBook = this.bookService.getOne(this.idBookRequested);
      this.outputBooks = requestedBook ? [requestedBook] : [];
    }
    this.idBookRequested = null;
  }

  getBooks(): void {
    this.bookService.getAll();
  }

  onSave(newBook:Book){
    this.bookService.add(newBook);
  }

  getOneBook(idBook:number){
    this.bookService.getOne(idBook);
  }

  deleteBook(idBook){
    this.bookService.delete(idBook)
  }

  // Modal shows and hide
  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}
