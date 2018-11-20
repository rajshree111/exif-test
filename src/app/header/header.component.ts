import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {TranslateService} from '@ngx-translate/core';
import * as firebase from 'firebase/app';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Boolean ;
  isAdmin: Boolean ;

  selected = 'en';

  constructor(private afs: AngularFirestore , public translate: TranslateService) {
    translate.addLangs(["en", "hn"]);
    translate.setDefaultLang('en');
    translate.use(this.selected)

   }

  ngOnInit() {

    //console.log("#####################################"+this.afs.doc<User>(`users/${this.logincom.thisUser.uid}`).valueChanges());

  }

  logout() {
    
  }

  doSomething($event){
   this.translate.use(this.selected)
  }

}
