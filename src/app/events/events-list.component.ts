import {Component, Output, EventEmitter, Inject, OnInit} from '@angular/core'
import {EventService} from "../shared/event.service";
import  {ToastrService} from "../common/toastr.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../shared/index";

@Component({
    /*selector: 'events-list',*/
    // template: `
    // <div class='form-group'>
    //     <h1>Upcoming Angular Events</h1>
    // </div>
    // `
     templateUrl: '../events/upcomingevents.html'
})

export class EventsListComponent implements  OnInit{
  events:IEvent[]
  eventService: EventService;
  toastr:ToastrService;
  route:ActivatedRoute
  constructor(@Inject(EventService) eventService: EventService, @Inject(ToastrService) toastr:ToastrService, @Inject(ActivatedRoute) route:ActivatedRoute){
    this.eventService = eventService;
    this.route = route
    this.toastr = toastr
  }
  ngOnInit(){

    this.events = this.route.snapshot.data['events'] //from resolver component
 /* this.eventService.getEvents().subscribe(events =>{
    this.events = events;
  });*/  //setting things up using observable only when data is received
}
  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }

}
