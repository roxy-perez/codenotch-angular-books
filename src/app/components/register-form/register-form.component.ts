import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "../../models/user";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  constructor(public userService: UserService, private fb: FormBuilder) {}
  public user: User;

  regForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    surname: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email]],
    url: ["", [Validators.required, Validators.minLength(5)]],
  });

  signUp() {
    console.log("llamando al signUp");
    this.user.name = this.regForm.controls["name"].value;
    this.user.surname = this.regForm.controls["surname"].value;
    this.user.email = this.regForm.controls["email"].value;
    this.user.url = this.regForm.controls["url"].value;

    this.userService.register(this.user).subscribe((res) => console.log(res));
  }
}
