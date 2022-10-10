import { InsertComponent } from './content/insert/insert.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { HomeComponent } from './content/home/home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'



const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    pathMatch: 'full',
    component: SigninComponent
  },
  {
    path: 'content',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'content/insert',
    pathMatch: 'full',
    component: InsertComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
