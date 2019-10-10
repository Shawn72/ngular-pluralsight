import {Component, Inject} from "@angular/core";
import {EventService} from "./event.service";
import {ActivatedRoute} from "@angular/router";
import  {Router} from "@angular/router";

@Component({
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <div>[Create Event Form]</div>
      <button type ="submit" class="btn btn-primary">Save</button>
      <button type ="submit" class="btn btn-default" (click)="Cancel()">Cancel</button>
    </div>
  `

})
 export  class CreateEventComponent {
  isDirty:boolean =true
  router: Router;
  constructor(@Inject(Router) router: Router){
    this.router = router
  }

  Cancel() {
    this.router.navigate(['/events']);
  }
}
