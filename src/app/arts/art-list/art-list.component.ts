import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mode } from './../../../environments/environment';

import { Article } from '../art';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {

  arts: Article[] = [];

  constructor(private router: Router, private angularFire: AngularFireDatabase) { }

  ngOnInit() {
    mode.admin = true;
    this.angularFire.list('artigos').subscribe(snapshot => this.arts = snapshot);
  }

  gotoNew() {
    let link = `/artigo/0`;
    this.router.navigateByUrl(link, { skipLocationChange: true });
  }

  gotoDetail(art: Article) {
    let link = `/artigo/${art.$key}`;
    this.router.navigateByUrl(link, { skipLocationChange: true });
  }
}
