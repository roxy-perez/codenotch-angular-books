import { Component, OnInit } from "@angular/core";
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
  public idBookRequested = null;

  constructor(
    public bookService: BooksService,
    public userService: UserService
  ) {}

  searchBooks() {
    if (this.idBookRequested === null) {
      this.getBooks();
    } else this.getOneBook(this.userService.user.user_id, this.idBookRequested);
  }

  getBooks(): void {
    const user_id = this.userService.user.user_id;
    this.bookService.getAll(user_id).subscribe({
      next: (books) => {
        this.books = books["body"];
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
    const user_id = this.userService.user.user_id;
    book.user_id = user_id;
    console.log(book);
    this.bookService.add(book).subscribe({
      next: (resultBook) => {
        console.log("Libro añadido: ", resultBook);
        this.book = resultBook["body"];
      },
      error: (error) => console.error("Error al agregar el libro: ", error),
      complete: () => {
        alert(`Libro añadido correctamente!`);
      },
    });
  }

  getOneBook(user_id: number, book_id: number) {
    console.log(this.idBookRequested);
    this.bookService.getOne(user_id, book_id).subscribe({
      next: (searchedBook) => {
        this.books[0] = searchedBook["body"];
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
        next: () => alert(`Libro eliminado correctamente!`),
        error: (error) => console.log("Error al eliminar el libro", error),
        complete: () =>  this.getBooks()
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
