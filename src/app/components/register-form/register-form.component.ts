import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "../../models/user";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  constructor(public userService: UserService) {}

  signUp(newUser: User) {
    console.log("llamando al signUp");
    this.userService
      .register(newUser)
      .subscribe((res) => console.log(res));
  }
}
