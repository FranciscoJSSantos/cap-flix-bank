import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { Login } from "../shared/login";
import { Token } from "../shared/token";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<HttpResponse<any>> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      observe: "response" as "response",
    };

    return this.http.post("api/v1/login", login, httpOptions).pipe(first());
  }
}
