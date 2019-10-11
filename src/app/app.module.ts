import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import  {appRoutes} from "./routes";
import { AppRoutingModule } from './app-routing.module';
import {
  EventsComponent,
  EventsListComponent,
  EventsThumbnailComponent,
  NavBarComponent,
  EventDetailsComponent,
  CreateEventComponent,
  Error404Component
  } from './events/index'
import {EventService} from "./shared/event.service";
import  {ToastrService} from "./common/toastr.service";
import {EventRouteActivator} from "./events/event-details/event-route-activator";
import {EventListResolver} from "./shared/events-list-resolver.service";
import {AuthService} from "./user/auth.service";

/*import { EventsComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent }  from './nav/navbar.component'
import {EventService} from "./shared/event.service";
import  {ToastrService} from "./common/toastr.service";
import  {EventDetailsComponent} from "./events/event-details/event-details.component";
import {CreateEventComponent} from "./shared/create-event.component";
import  {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-details/event-route-activator";
import {EventListResolver} from "./shared/events-list-resolver.service";*/

@NgModule({
   imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
      ],
  providers: [EventService, ToastrService, EventRouteActivator,EventListResolver,AuthService,
    {provide:"CanDeactivateCreateEvent", useValue: checkDirtyState}],
  bootstrap: [EventsComponent],
})
export class AppModule { }
export  function  checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, sure you wanna cancel?')
  return true
}
