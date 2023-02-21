import { Component, ViewChild } from "@angular/core";
import { User } from "src/app/models/user";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {

  // usuario de prueba
  user = new User(
    1,
    "Roxy",
    "Pérez",
    "necropsia32@gmail.com",
    "/images/user.jpg"
  );

  newUser = {} as User;

  @ViewChild('itemForm', { static: false }) form!: NgForm;

  onSubmit(form: NgForm) {
    console.log(JSON.stringify(form.value));
  }

}
