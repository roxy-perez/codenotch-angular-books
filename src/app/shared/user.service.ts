import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url: string;
  public logged: boolean = false;
  public user: User;


  constructor(private http: HttpClient) {
    this.url = "http://localhost:3001/user/v1";
  }

  register(user: User): Observable<Object> {
    return this.http.post(`${this.url}/users`, user);
  }

  login(email: string): Observable<Object> {
    return this.http.post(`${this.url}/login`, email);
  }

}
