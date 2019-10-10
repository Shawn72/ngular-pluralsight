import {Inject, Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {EventService} from "./event.service";
import {map} from "rxjs/operators";
import {ToastrService} from "../common/toastr.service";

@Injectable()
export class EventListResolver implements  Resolve<any>{
  eventService: EventService;
  constructor(@Inject(EventService) eventService: EventService, private  toastr:ToastrService){
    this.eventService = eventService;
  }
  resolve() {
    return this.eventService.getEvents().pipe(map(events=>events))
  }
}
