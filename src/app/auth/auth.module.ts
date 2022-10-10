import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "src/core/shared/angular.material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { CreateAccountComponent } from "./components/create-account/create-account.component";
import { SigninComponent } from "./components/signin/signin.component";

@NgModule({
  declarations: [SigninComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SigninComponent, CreateAccountComponent, AuthRoutingModule],
})
export class AuthModule {}
