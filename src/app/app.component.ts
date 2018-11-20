import { Component, OnInit, OnDestroy} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'app';

  custHistArrayObj = [];
  arrayCreationTime =[];

  constructor(){ }

ngOnInit() {
this.custHistArrayObj= [{
  "creationTime": "2018-11-21T00:00:00Z"
},
{
  "creationTime": "2018-11-20T10:00:26Z"
},
{
  "creationTime": "2018-11-14T16:00:26Z"
},
{
  "creationTime": "2018-11-14T16:00:26Z"
},
{
  "creationTime": "2018-11-14T16:00:26Z"
}
];

var d = new Date("2015-03-25T12:00:00Z");
console.log('???????????',d.getDate(),d.getDay(),d.getFullYear());



this.custHistArrayObj.filter(obj=>
  {
    this.arrayCreationTime.push(obj.creationTime);
  });

  console.log('@@@@@',new Date(this.arrayCreationTime[0]));

  let currentdate = new Date();
  currentdate.setHours(0);
  if(new Date(this.arrayCreationTime[0])>=currentdate){
    console.log("today.....................................");
  }

  

}
  
  ngOnDestroy() {
      
  }
}
