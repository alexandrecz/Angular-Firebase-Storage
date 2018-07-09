import { Component } from '@angular/core';
import { mode } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'JCK - Admin';
  // loggedIn$: boolean = false;

  public menuItems = [
    { caption: 'Dashboard', link: ['dashboard'] },
    { caption: 'Artigos', link: ['artigos'] },
    { caption: 'Site', link: ['site'] }
  ];


  constructor(){
  //   private _messageService: MessageService,
  //   private _modalService: ModalService) {
  
  }

  get isAdminMode() {
    return mode.admin;
  }

  // get isLogged() {
  //   this.loggedIn$ = auth.loggedIn;
  //   return this.loggedIn$;
  // }
}
