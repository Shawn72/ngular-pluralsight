import  {Routes} from "@angular/router";
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  Error404Component,
  EventRouteActivator,
  EventListResolver
} from './events/index'

/*import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {CreateEventComponent} from "./shared/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-details/event-route-activator";
import {EventListResolver} from "./shared/events-list-resolver.service";*/

export const appRoutes:Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate:['CanDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve:{events:EventListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]},//eg /events/1 or /events/idnumber
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  //{path: 'user', loadChildren:()=>UserModule}
  {path: 'user', loadChildren:'./user/user.module#UserModule'}

]
