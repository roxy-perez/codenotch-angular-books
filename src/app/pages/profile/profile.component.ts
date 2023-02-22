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

  onSubmit(data) {
    this.user.name = data.name;
    this.user.surname = data.surname;
    this.user.email = data.email;
    this.user.url = data.url;

    console.log(data.name);
  }


}
