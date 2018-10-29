import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EXIF } from 'exif-js';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

ImageCapturedLatitude: any;
ImageCapturedLongitude: any;
imageCapturedDate:Date;

  @ViewChild("video")
    public video: ElementRef;

    @ViewChild("canvas")
    public canvas: ElementRef;

    public captures: Array<any>;

    public constructor() {
        this.captures = [];
    }

    public ngOnInit() {
    console.log("component loaded....");
    //setTimeout(() => console.log("@@@@@@@@@@@@@@@@@@@",this.executeThis()), 10000);
     }

    public ngAfterViewInit() {
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
              this.video.nativeElement.src = window.URL.createObjectURL(stream);
              this.video.nativeElement.play();
          });
      }
  }

  public capture() {
     
      var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
      console.log("################",this.canvas.nativeElement.toDataURL("image/png"));
      this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
      
	 if(navigator.geolocation){
	     navigator.geolocation.getCurrentPosition((position) => { 
	  console.log("Got position", position.coords);
	  this.ImageCapturedLatitude = position.coords.latitude; 
      this.ImageCapturedLongitude = position.coords.longitude;
      this.imageCapturedDate = new Date();
      var allMetaDataSpan = document.getElementById("allMetaDataSpan");
        allMetaDataSpan.innerHTML = " "+this.ImageCapturedLatitude +"\t "+this.ImageCapturedLongitude+" \n"+this.imageCapturedDate;
	});
 }
}
  
  loadCapturedImage(){
  
   console.log("checkpoint#################################################",this.captures[0]);
    var img2 = this.captures[0];
    console.log("$$$",img2);
    EXIF.getData(img2, function() {
    console.log("aya idhar.....");
        var allMetaData = EXIF.getAllTags(this);
        var allMetaDataSpan = document.getElementById("allMetaDataSpan");
        console.log("***",JSON.stringify(allMetaData, null, "\t"));
        allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
    });
  }

}