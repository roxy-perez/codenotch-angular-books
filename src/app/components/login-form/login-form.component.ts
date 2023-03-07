import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  public user: User;

  constructor(public userService: UserService, private router: Router) {}

  signIn(email: string): void {
    this.userService.login(email).subscribe(
      {
        next: (response) => {
          this.userService.logged = true;
          console.log("respuesta login",response['body']);
          this.userService.user = response['body'];
          this.router.navigate(['/books']);
        },
        error: (error) => console.error('Error al iniciar sesión', error),
        complete: () => console.info('Login completado')
      }
    );
  }
}
