import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

    // Método para criar um novo usuário
    logar(login: Login): Observable<Login> {
      return this.http.post<Login>(this.apiUrl, login);
    }

}
