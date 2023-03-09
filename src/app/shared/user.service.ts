import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url: string;
  public logged: boolean = false;
  public user: User;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<Object> {
    const headers = { "content-type": "application/json" };
    return this.http.post("http://localhost:3001/user/v1/users", user, {
      headers: headers,
    });
  }

  login(email: string): Observable<Object> {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(email);
    return this.http.post("http://localhost:3001/user/v1/login", body, {
      headers: headers,
    });
  }
}
