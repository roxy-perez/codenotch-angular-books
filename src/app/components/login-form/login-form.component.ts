import { Component } from '@angular/core';
import { UserService } from "../../shared/user.service";
import { User } from "../../models/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(public userService: UserService) {}

  signIn(user: User) {
    this.userService.login(user).subscribe((res) =>{
      this.userService.logged = true;
      console.log(res);
      //this.userService.user = res;
    });
  }

}
