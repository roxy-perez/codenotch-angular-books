import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url: string = 'http://localhost:3001/user/v1';
  public logged: boolean;
  public user: User;

  constructor(private http: HttpClient) {
    this.logged = false;
  }

  register(user: User): Observable<Object> {
    return this.http.post(`${this.url}/users`, user);
  }

  login(email: string): Observable<Object> {
    return this.http.post(`${this.url}/login`, { email });
  }
}
