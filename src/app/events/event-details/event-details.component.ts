import {Component, Inject} from "@angular/core";
import  {EventService} from "../../shared/event.service";
import {ActivatedRoute} from "@angular/router";
import {activateRoutes} from "@angular/router/src/operators/activate_routes";

@Component({
  templateUrl: './event-details.component.html',
  styles:[
    `.container {padding-left: 20px;padding-right: 20px}
      .event-image {height: 100px;}
    `
  ]
})
export class EventDetailsComponent{
  event:any
  eventService: EventService;
  route:ActivatedRoute
  constructor(@Inject(EventService) eventService: EventService, @Inject(ActivatedRoute) route:ActivatedRoute){
    this.eventService = eventService;
    this.route = route;

  }
 ngOnInit(){
  this.event = this.eventService.getEvent(+this.route.snapshot.params['id']) //casting to a number using +
 }
}
