import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  user: User;

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  signIn(user){
    this.userService.login(user).subscribe(userData => {
      if (!userData) {
        console.log('El correo ingresado no coincide con ningún usuario');
      } else {
        console.log(userData);
        this.userService.logged = true;

        console.log(`Bienvenido, ${userData}!`);
        this.router.navigateByUrl('/books');
      }
    });
  }
}
