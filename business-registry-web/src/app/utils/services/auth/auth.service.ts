import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../../models/auth.model";
import { LocalStorage } from "../../data/local-storage.util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient, private localStorage: LocalStorage) { }

  // Método para criar um novo usuário
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
