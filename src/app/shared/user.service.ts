import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url: string = "http://localhost:3001/user/v1";
  public logged: boolean = false;
  public user: User;

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${this.url}/users`, user);
  }

  login(user: User) {
    this.user = user;
    return this.http.post(`${this.url}/login`, user);
  }
}
