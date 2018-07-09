import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mode } from './../../environments/environment';

import { Article } from '../arts/art';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  artigos: Article[] = [];

  constructor(private router: Router, private angularFire: AngularFireDatabase) { }

  ngOnInit() {
    mode.admin = true;
    this.angularFire.list('artigos').subscribe(snapshot => this.artigos = snapshot);
  }

  gotoDetail(art: Article) {
    let link = `/artigo/${art.$key}`;
    this.router.navigateByUrl(link, { skipLocationChange: true });
  }

}
