import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';




import * as admin from 'firebase-admin';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { TruncatePipe } from './truncate.service';


export const firebaseConfig = {
  apiKey: 'AIzaSyA8y7brDTBunobigfd4xQWYcYHj-vUwCCM',
  authDomain: 'my-travel-website-6f84f.firebaseapp.com',
  databaseURL: 'https://my-travel-website-6f84f.firebaseio.com',
  projectId: 'my-travel-website-6f84f',
  storageBucket: 'my-travel-website-6f84f.appspot.com',
  messagingSenderId: '793702405867'

};

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    HeaderComponent,
    HomeComponent,

    TestComponent,
    
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
      AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule,
      MaterialModule,
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
