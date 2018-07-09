import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Article } from '../art';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';


@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  art: Article = new Article();
  
  private idArticle: String;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private angularFire: AngularFireDatabase) {
   }

  ngOnInit() {
    this.getArtigo();
  }

  isAddMode() {
    return this.idArticle=='0';
  }

  private getArtigo() {
    let id = this.activatedRoute.params.subscribe(params => {
      this.idArticle = params['$key'].toString();
      if (this.isAddMode()) {
        this.art.$key = '';
        this.art.title = '';
        this.art.short= '';
        this.art.desc= '';
      }
      else{ 

        this.angularFire.list('artigos').subscribe(snapshot =>{
            for (let index = 0; index < snapshot.length; index++) {
              if(snapshot[index].$key==this.idArticle){
                this.art = snapshot[index];
              }
            }
        });
    }

   });
  }

  gotoArt(){
    let link = `/artigos`;
    this.router.navigateByUrl(link);
  }

  cancel() {
    this.gotoArt();
  }

  delete() {

    this.angularFire.object('/artigos/' + this.art.$key).remove();
    this.gotoArt();
  }

  save() {

    if (this.isAddMode()) {
        this.angularFire.list("artigos").push(
        {
            title: this.art.title,
            short: this.art.short,
            desc: this.art.desc
        }).then((t: any) => {
            this.gotoArt();
        }),
          (e: any) => console.log(e.message);
    }
    else {
      this.angularFire.object('/artigos/' + this.art.$key).update(this.art);
      this.gotoArt();
    }

  }

}