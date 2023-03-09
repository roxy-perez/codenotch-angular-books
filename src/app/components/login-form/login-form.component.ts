import { Component } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  public user: User;

  constructor(
    public userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  frmLogin = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
  });

  signIn(): void {
    const email: string = this.frmLogin.controls["email"].value;
    this.userService.login(email).subscribe({
      next: (response) => {
        console.log("respuesta login", response["body"]);
        this.userService.logged = true;
        this.userService.user = response["body"];
      },
      error: (error) => console.error("Error al iniciar sesión", error),
      complete: () => this.router.navigate(["/books"]),
    });
  }
}
