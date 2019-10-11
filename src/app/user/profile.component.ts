import {Component, Inject, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './profile.component.html',
  styles:[
    `
      em {
        float: right;
        color: #f50057;
        padding-left: 10px
      }
      .error input {
        background-color: #99311c
      }
    `
  ]
})
export class ProfileComponent implements OnInit{
  profileForm:FormGroup //create property
  private firstName:FormControl
  private lastName: FormControl
  authService:AuthService
  router:Router
  constructor(@Inject(AuthService) authService: AuthService, @Inject(Router) router){
    this.authService = authService
    this.router=router
  }

 ngOnInit(){
   this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
   this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
   this.profileForm = new FormGroup({
     firstName: this.firstName,
     lastName: this.lastName
   })
 }
  validateFirstName(){
    return this.firstName.valid ||
    this.firstName.untouched
  }

validateLastName(){
  return this.lastName.valid ||
  this.lastName.untouched
}
 cancel(){
    this.router.navigate(['events'])
 }


  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
  }
}
