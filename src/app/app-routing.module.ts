import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ArtComponent } from './arts/art/art.component';
import { ArtListComponent } from './arts/art-list/art-list.component';
import { SiteComponent } from './site/site.component';

const routes: Routes = [
  { path: '', redirectTo: '/site', pathMatch: 'full' },
  { path: 'admin', redirectTo: '/dashboard', pathMatch: 'prefix' },
  { path: 'site',  component: SiteComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'artigos',  component: ArtListComponent },
  { path: 'artigo/:$key', component: ArtComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}