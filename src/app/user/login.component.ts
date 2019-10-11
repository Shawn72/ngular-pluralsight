import {Component, Inject} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  templateUrl:'./login.component.html',
  styles:[
    `
      em {float:right; color:#f50057; padding-left: 10px}
    `
  ]
})

export  class LoginComponent{
  userName
  password
  mouseoverLogin
  router:Router
  authService:AuthService
  constructor(@Inject(AuthService) authService: AuthService, @Inject(Router) router){
    this.router = router
    this.authService = authService
  }
  login(formValues){
    //console.log(formValues)
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }
  cancel(){
    this.router.navigate(['events'])
  }
}

