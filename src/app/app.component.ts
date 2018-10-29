import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';

  constructor(){

  }
  ngOnDestroy() {
      window.onbeforeunload = function(e) {
        confirm('exiting......................');
          return 'Dialog text here.';
      };
  }
}
