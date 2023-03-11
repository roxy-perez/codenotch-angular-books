import { Component } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiResponse } from "src/app/models/api-response";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  email: string;

  constructor(
    public userService: UserService, private router: Router, private fb: FormBuilder
  ) {}

  frmLogin = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
  });

  signIn(): void {
    this.email = this.frmLogin.controls["email"].value;
    this.userService.login(this.email).subscribe({
      next: ( response: { user: User } | ApiResponse) => {
        console.log("response", response);
        if ('user' in response) {
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
