import { Component } from "@angular/core";
import { Book } from "src/app/models/book";
import { BooksService } from "../../shared/book.service";
import { UserService } from "../../shared/user.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent {
  public books: Book[] = [];
  public book: Book;
  user_id: number;

  constructor(
    public bookService: BooksService, public userService: UserService) {
    this.user_id = this.userService.user[0]?.user_id || undefined;;
    this.getBooks();
  }

  searchBooks(idBook: number) {
    this.user_id = this.userService.user[0].user_id;
    if (!idBook) {
      this.getBooks();
    } else this.getOneBook(this.user_id, idBook);
  }

  getBooks(): void {
    this.bookService.getAll(this.user_id).subscribe({
      next: (response: { books: Book[] }) => {
        if ('books' in response) {
          this.books = response.books;
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info("GetBooks --> completado!");
      },
    });
  }

  onSave(book: Book) {
    book.user_id = this.user_id;
    console.log(book);
    this.bookService.add(book).subscribe({
      next: (response: { book: Book }) => {
        console.log("Libro añadido: ", response.book);
        this.book = response.book;
      },
      error: (error) => console.error("Error al agregar el libro: ", error),
      complete: () => {
        alert(`Libro añadido correctamente!`);
        this.getBooks();
      },
    });
  }

  getOneBook(user_id: number, book_id: number) {
    console.log(user_id, book_id);
    this.bookService.getOne(user_id, book_id).subscribe({
      next: (foundBook: { book: Book }) => {
        console.log(foundBook);
        this.books = [];
        this.books[0] = foundBook.book;
        console.log(this.books[0]);
        if (this.books[0] === null) {
          alert(
            "Ese número de referencia de libro no existe para este usuario"
          );
        }
      },
      error: (error) => console.error("Error al buscar el libro", error),
    });
  }

  deleteBook(book_id) {
    console.log(book_id);
    if (confirm("¿Estás seguro que deseas eliminar este libro?")) {
      this.bookService.delete(book_id).subscribe({
        next: () => {
          alert(`Libro eliminado correctamente!`);
        },
        error: (error) => console.log("Error al eliminar el libro", error),
        complete: () => this.getBooks(),
      });
    }
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
