import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocalStorage } from "../../data/local-storage.util";
import { Login } from "../../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient, private localStorage: LocalStorage) { }
  logar(login: Login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl, login);
  }

  public get tokenHeaders() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.localStorage.Token}`,
    }
  }
}
