import { HttpRequest, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Login } from "../shared/login";
import { Token } from "../shared/token";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  //Variáveis para mudança de padrão de texto e ícone
  isDisplay: boolean = false;
  typeInputPassword: string = "password";
  visibilityPassword: string = "visibility_off";

  //mudança do icone de visibility e type do input
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
    this.isDisplay == false
      ? (this.typeInputPassword = "password")
      : (this.typeInputPassword = "text");

    this.isDisplay == false
      ? (this.visibilityPassword = "visibility_off")
      : (this.visibilityPassword = "visibility");
  }

  //Crianção de variavel do formulario de login
  loginForm!: FormGroup;

  //Puxando interface do padrão 'Login'
  login: Login;

  keepLogged: boolean = false;

  changeKeepLogged() {
    this.keepLogged = !this.keepLogged;
  }

  //Mensagens de validação do login
  loginValidationMessages: any = {
    email: {
      required: "Email  is required.",
      email: "Email not in valid format.",
    },
    password: {
      required: "Password is required.",
    },
  };

  //Erros caso o campo permaneça vazio
  loginFormErrors: any = {
    email: "",
    password: "",
  };

  constructor(
    private _formBuilder: FormBuilder, //FormBuilder cria uma configuração abstrata para a config que for passada
    private _router: Router, // Router possui métodos para confirguração de rotas
    private _authService: AuthService
  ) {
    //Inicializando o formulário de login
    this.formLogin();
  }

  ngOnInit() {}

  //Criando forms
  formLogin() {
    this.loginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });

    //Mudanças a cada diferença no campo
    this.loginForm.valueChanges.subscribe((data) => this.onValueChanged(data));

    this.onValueChanged(); //
  }

  //Checagem de erro in live
  onValueChanged(data?: any) {
    if (!this.loginForm) {
      return;
    }
    const form = this.loginForm;
    for (const field in this.loginFormErrors) {
      if (this.loginFormErrors.hasOwnProperty(field)) {
        //clear previous erro message (if any)
        this.loginFormErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.loginValidationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.loginFormErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  }

  //Submit
  submitLoginForm() {
    this.login = this.loginForm.value;

    if (this.loginForm.valid) {
      console.log({
        email: this.loginForm.get("email").value,
        password: this.loginForm.get("password").value,
      });

      this._authService.login(this.login).subscribe(
        (result) => {
          this.onSucess(
            "Curso salvo com sucesso!",
            result.headers.get("Authorization")
          );
        },
        (error) => this.onError("Erro ao salvar Curso!", error)
      );
    }
    this._router.navigate(["content"]);
  }

  private onSucess(sucessMsg: string, result: string) {
    console.log(result);
    if (!this.keepLogged) {
      sessionStorage.setItem("tokenLogin", JSON.stringify(result));
    } else {
      localStorage.setItem("tokenLogin", JSON.stringify(result));
    }
  }

  private onError(errorMsg: string, error: any) {
    console.log(error);
  }

  sigUp() {}
}
