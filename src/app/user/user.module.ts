import {ProfileComponent} from "./profile.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user.routes";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: []
})
export class UserModule{}
