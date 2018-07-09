import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mode } from './../../environments/environment';
import { Article } from '../arts/art';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

// import { ArtsService } from '../arts/arts.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  profileTextOne = '';
  profileTextTwo = '';
  profileTextThree = '';

  articleTitleOne = '';
  articleTitleTwo = '';
  articleTextOne = '';
  articleTextTwo = '';

  arts: Article[] = [];
  artigos$: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFireDatabase) {

    this.profileTextOne = "Nosso escritório atende clientes nacionais e internacionais, atuando judicial e extrajudicialmente.  Contamos com excelentes profissionais preparados para a administração da justiça e assegurar a defesa dos interesses das partes em juízo.";
    this.profileTextTwo = "É nosso compromisso atender com a presteza e rapidez tão necessárias às resoluções de lides.";
    this.profileTextThree = "Nosso escritório atende clientes nacionais e internacionais, atuando judicial e extrajudicialmente. Contamos com excelentes profissionais preparados para a administração da justiça e assegurar a defesa dos interesses das partes em juízo. É nosso compromisso atender com a presteza e rapidez tão necessárias às resoluções de lides.";
   }

  ngOnInit() {
    mode.admin = false;

    // this.angularFire.list("artigos").push(
    //   {
    //       title: "Tutelas",
    //       short: "Apesar de ter como fundamento a modernização dos direitos",
    //       desc: "Apesar de ter como fundamento a modernização dos direitos trabalhistas, as fórmulas utilizadas são de flexibilização,...."
    //   }
    //  ).then((t: any) => 
    //     console.log('dados gravados: ' + t.key)),
    //     (e: any) => console.log(e.message);
    const loadText = "loading...";
    this.articleTitleOne = loadText;
    this.articleTitleTwo = loadText;
    this.articleTextOne = loadText;
    this.articleTextTwo = loadText;

    this.angularFire.list('artigos').subscribe(
      snapshot => {
        this.articleTitleOne = snapshot[0].title;
        this.articleTextTwo = snapshot[0].short;
        this.articleTitleTwo = snapshot[1].title;
        this.articleTextTwo = snapshot[1].short;
        }
    );
    

  }

}
