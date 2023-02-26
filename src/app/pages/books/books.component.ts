import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book";
import { NgForm } from "@angular/forms";
import { BooksService } from "../../shared/books.service";
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
    console.log("he llamado SearchBooks()");
    if (this.idBookRequested === null) {
      this.outputBooks = this.bookService.getAll();
      console.log("dentro del IF");
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

  /*  public books: Book[];

  constructor(){
   // this.books = [];
    this.books = [
      new Book(1, 1, "Head First JavaScript Programming", "Elisabeth Robson", 41.60, "../../../assets/img/js.jpeg", "Tapa blanda"),
      new Book(2, 1, "Cómo hacer que te pasen cosas buenas", "Marian Rojas Estapé", 18.90, "../../../assets/img/como.png", "Tapa blanda"),
      new Book(3, 1, "El Hombre en busca de sentido", " Viktor Frankl", 12.25, "../../../assets/img/El-hombre-en-busca-de-sentido.jpg", "Tapa blanda"),
      new Book(4, 1, "El Coronel no tiene quien le escriba", "Gabriel García Márquez", 15.10, "../../../assets/img/coronel2.jpg", "Tapa dura"),
      new Book(5, 1, "Por si las voces vuelven", "Ángel Martín", 17.00, "../../../assets/img/porsilasvoces.jpeg", "Tapa blanda"),
    ]
  }

  onSave(newBook: Book){
    newBook.id_user = 1;
    this.books.push(newBook);
    alert('¡Libro guardado!')
    console.log(this.books);
  } */

  // Modal shows and hide
  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}
