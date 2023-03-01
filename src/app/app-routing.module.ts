import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./pages/profile/profile.component";
import { RegisterComponent } from "./pages/register/register.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { BooksComponent } from "./pages/books/books.component";
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "/register", pathMatch: "full" },
  { path: "register", component: RegisterFormComponent },
  { path: "profile", component: ProfileComponent },
  { path: "books", component: BooksComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
