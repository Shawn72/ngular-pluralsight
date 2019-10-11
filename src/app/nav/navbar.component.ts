import {Component, Inject} from '@angular/core'
import {AuthService} from "../user/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'nav-bar',
    templateUrl: '../nav/navbar.component.html',
    styles:[
        `
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) { #searchForm {display: none;}}
        li > a.active {color:#F97924}
        `
    ]
})
export class NavBarComponent{
  authService:AuthService
  constructor(@Inject(AuthService) authService: AuthService, @Inject(Router) router){
    this.authService = authService
  }
}
