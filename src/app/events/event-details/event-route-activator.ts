import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {Inject, Injectable} from "@angular/core";
import {EventService} from "../../shared/event.service";

@Injectable()
export  class  EventRouteActivator implements CanActivate{
  eventService:EventService;
  router:Router
  constructor(@Inject(EventService) eventService: EventService, @Inject(Router) router){
    this.eventService = eventService;
    this.router = router;
  }
    canActivate(route:ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']) //cast to boolean using '!!'
      if(!eventExists)
        this.router.navigate(['/404'])
      return eventExists;

  }
}

