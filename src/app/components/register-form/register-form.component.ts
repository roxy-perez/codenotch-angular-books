import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from "../../shared/user.service";
import { User } from "../../models/user";
import { ApiResponse } from "src/app/models/api-response";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  public user: User;

  regForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    url: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    public userService: UserService,
    private fb: FormBuilder, private router: Router) {
    this.user = {
      user_id: null,
      name: "",
      surname: "",
      email: "",
      url: "",
    };
  }

  signUp() {
    this.user.name = this.regForm.controls["name"].value;
    this.user.surname = this.regForm.controls["surname"].value;
    this.user.email = this.regForm.controls["email"].value;
    this.user.url = this.regForm.controls["url"].value;

    this.userService.register(this.user).subscribe({
      next: (response: ApiResponse) => {
        if (response.ok) {
          this.autoSignIn(this.user.email);
        }
      },
      error: (error) => console.error(error),
    });
  }

  autoSignIn(email: string): void {
    this.userService.login(email).subscribe({
      next: (response: { user: User } | ApiResponse) => {
        console.log("desde el autologin", response);
        if ("user" in response) {
          this.userService.logged = true;
          this.userService.user = response.user;
        } else {
          console.log(response.status, response.message);
        }
      },
      error: (error) => console.error("Error al iniciar sesión", error),
      complete: () => this.router.navigate(["/books"]),
    });
  }
}
