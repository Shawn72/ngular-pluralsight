import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]= "['/events', event.id]" class="well hoverwell thumbnail">
            <div>Event name: {{event?.name}}</div>
            <div>Date: {{event?.date}}</div>           
         <!-- <div class ="well" [ngClass]="getStartTimeClass()"  [ngSwitch]="event?.time">-->
            <div [ngStyle]="getStartTimeStyle()"  [ngSwitch]="event?.time">
            Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
          </div>
            <div>Price: \${{event?.price}}</div>
          <div>
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
            </div>
        </div>
    `,
    styles:[`
      .green {color:#0f9d58 !important;}
      .bold {font-weight: bold;}
      .thumbnail {min-height:210px;}
      .pad-left {margin-left:15px;}
      .well div { color: aliceblue}
    `]
})
export class EventsThumbnailComponent{
    @Input()event:any
    someProperty:any = "Shawn's fav gal names: Daisy, Cherry, Nikolina, Cassandra"
    @Output() eventClick = new EventEmitter();

   // code event functions
    handleClickMe(){
    // console.log('You clicked me!');
        this.eventClick.emit(this.event.name);
    }
    logFoo(){
        console.log('Foo Logged')
    }

    getStartTimeClass(){
      //const isEarlyStart = this.event.time === '8:00 am'
     /* return{green: isEarlyStart, bold: isEarlyStart}*/
      if(this.event && this.event.time === '8:00 am'){
        return ['green', 'bold']; //return array string of classes separated by a space
        return [];
      }
    }

    getStartTimeStyle():any{ //set return type of the function to any
      if(this.event && this.event.time === '8:00 am'){
        return {color: '#0f9d58', 'font-weigh':'bold'}; //return array string of classes separated by a space
        return {};
      }
    }

}
