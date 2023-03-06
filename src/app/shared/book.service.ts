import { Injectable } from "@angular/core";
import { Book } from "../models/book";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class BooksService {
  private baseUrl = "http://localhost:3001/book/v1/books";

  constructor(private http: HttpClient) {}

  public getAll(user_id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${user_id}`);
  }

  public getOne(user_id: number, book_id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${book_id}?user_id=${user_id}`);
  }

  public add(book: Book):Observable<Object>  {
    return this.http.post(`${this.baseUrl}`, book);
  }

  public delete(book_id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}?book_id=${book_id}`);
  }
}
