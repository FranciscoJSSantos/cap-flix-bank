import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SigninComponent } from "./auth/components/signin/signin.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "src/core/shared/angular.material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./content/components/header/header.component";
import { SidebarComponent } from "./content/components/sidebar/sidebar.component";
import { HomeComponent } from "./content/home/home.component";
import { InsertComponent } from "./content/insert/insert.component";

const components = [
  AppComponent,
  HomeComponent,
  HeaderComponent,
  SidebarComponent,
  InsertComponent,
  SigninComponent,
  InsertComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [components],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
