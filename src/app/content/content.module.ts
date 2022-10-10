import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { AngularMaterialModule } from 'src/core/shared/angular.material.module';

import { ContentRoutingModule } from './content-routing.module';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ContentRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  ]
})
export class ContentModule { }
