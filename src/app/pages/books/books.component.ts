import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book";
import { BooksService } from "../../shared/book.service";
import { UserService } from "../../shared/user.service";
import { User } from "../../models/user";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  newBook: Book;
  user: User;
  temp: User;

  constructor(
    public bookService: BooksService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.user;
    this.getUser();
  }

  /*   searchBooks(): void {
    if (this.idBookRequested === null) {
      this.outputBooks = this.bookService.getAll();
    } else {
      const requestedBook = this.bookService.getOne(this.idBookRequested);
      this.outputBooks = requestedBook ? [requestedBook] : [];
    }
    this.idBookRequested = null;
  } */

  getBooks(user_id: number): void {
    this.bookService.getAll(user_id).subscribe((books: Book[]) => {
      console.log(books);
      this.books = books;
    });
  }

  onSave(newBook: Book) {
    this.bookService
      .add(newBook)
      .subscribe((book) => console.log("Libro añadido: ", book));
  }

  getOneBook(user_id: number, book_id: number) {
    this.bookService
      .getOne(user_id, book_id)
      .subscribe((book) => console.log(book));
  }

  deleteBook(book_id) {
    this.bookService
      .delete(book_id)
      .subscribe((book) => console.log("Libro eliminado: ", book));
  }

  getUser() {
    this.userService.login(this.user).subscribe({
      next: (v) => {console.log(v),
      this.temp = <User>v,
      console.log("temp user", this.temp.id);
    },
      error: (e) => console.error(e),
      complete: () => console.info("complete"),
    });
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
