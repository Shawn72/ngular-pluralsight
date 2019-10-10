import {ProfileComponent} from "./profile.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user.routes";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
   CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: []
})
export class UserModule{}
