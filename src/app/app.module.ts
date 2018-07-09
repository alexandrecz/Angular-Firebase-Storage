import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import 'rxjs/Rx'; // load the full rxjs

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArtComponent } from './arts/art/art.component';
import { ArtListComponent } from './arts/art-list/art-list.component';

import { AppRoutingModule } from './app-routing.module';
import { SiteComponent } from './site/site.component';

import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ArtComponent,
    ArtListComponent,
    SiteComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
