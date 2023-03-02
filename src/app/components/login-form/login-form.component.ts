import { Component } from '@angular/core';
import { UserService } from "../../shared/user.service";
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  user: User;

  constructor(public userService: UserService, private router: Router) {}

  signIn(user) {
    console.log(user);
     this.userService.login(user);
    if (user) {
      this.userService.logged = true;
      this.userService.user = user;
      this.router.navigate(['/books']);
    } else {
      console.log('Credenciales incorrectas');
    }
  }

}
