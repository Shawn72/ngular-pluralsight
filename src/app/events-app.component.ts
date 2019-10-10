import { Component } from '@angular/core';

@Component({
  selector: "events-app",
  template: `<nav-bar></nav-bar>
            <router-outlet></router-outlet>`
  // <router-outlet></router-outlet>
  // templateUrl: './event.app.html'
})
export class EventsComponent {
  title = 'ng-fundamentals'; 
}
