import { Component, OnInit, OnDestroy} from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  count =2;
  title = 'app';
  filterStatus: Boolean = false;
  arraayObj = [];
  arraayObjKey = Object.keys(this.arraayObj);
  filterArraayObj ={};
  filterArraayObjKey = Object.keys(this.filterArraayObj);
  arrayCreationTime =[];
  uniqueItems =[];
  constructor(){ }
ngOnInit() {
this.arraayObj= [{
  "name":"case history",
  "creationTime": "2018-11-21T11:00:00Z"
},
{
  "name":"order history",
  "creationTime": "2018-11-21T10:00:26Z"
},
{
  "name":"case history",
  "creationTime": "2018-11-14T16:00:26Z"
},
{
  "name":"case history",
  "creationTime": "2018-11-14T16:00:26Z"
},
{
  "name":"case history",
  "creationTime": "2018-11-20T16:00:26Z"
}
];
this.arraayObj.sort((d1,d2)=>{
  return (new Date(d2.creationTime).getTime() - new Date(d1.creationTime).getTime());
});

var d = new Date("2015-03-25T12:00:00Z");
console.log('???????????',d.getDate(),d.getDay(),d.getFullYear());
this.arraayObj=this.arraayObj.filter(obj=>
  {
    obj['newala']="blah blah blah"
    // console.log(new Date(obj.creationTime).setHours(0,0,0,0).getFullYear());
    console.log('-----------------------------',new Date(obj.creationTime).getDay());
    this.arrayCreationTime.push(new Date(obj.creationTime).setHours(0,0,0,0));
    return obj;
  });
  console.log("..............................",this.arraayObj);
  console.log('@@@@@',this.arrayCreationTime);
   var item= Array.from(new Set(this.arrayCreationTime));
   item=item.filter(arr=>{
     console.log(arr.getFullYear()+" "+arr.getDay()+" "+arr.getDate());
     return (arr.getFullYear+" "+arr.getDay+" "+arr.getDate);
   });
  console.log('uniqueItems...',item); // show UI for these many items
//https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  let currentdate = new Date();
  currentdate.setHours(0,0,0,0);
  if(new Date(this.arrayCreationTime[0])>=currentdate){
    console.log("today.....................................");
  }
}
filter(){
  this.filterStatus = ! this.filterStatus;

  if(!this.filterStatus){
    this.filterArraayObj =[];
  }
}
selectable(item){
  if(item=='first'){
//this.filterArraayObj.push(this.arraayObj[0]);
this.filterArraayObj[(this.arraayObj[0].creationTime)] ='value';
this.filterArraayObjKey = Object.keys(this.filterArraayObj);
this.filterArraayObjKey.sort((d1,d2)=>
new Date(d2).getTime()-new Date(d1).getTime()
);
 
  }else{
    this.filterArraayObj[(this.arraayObj[1].creationTime)] = 'jjjjj';
    this.filterArraayObjKey = Object.keys(this.filterArraayObj);
  }

  this.filterArraayObjKey.sort(((d1,d2)=>{
    return (new Date(d2).getTime() - new Date(d1).getTime());
  }))
}
  ngOnDestroy() {    
  }
}
