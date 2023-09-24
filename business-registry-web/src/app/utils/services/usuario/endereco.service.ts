import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../../models/usuario/endereco.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private apiUrl = 'http://localhost:8080/enderecos';

  constructor(private http: HttpClient, private authService: AuthService) { }

  criarEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.apiUrl, endereco);
  }

  obterEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.apiUrl);
  }

  obterEnderecoPorId(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.apiUrl}/${id}`);
  }

  obterEnderecosByUsuarioId(id: number): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(`${this.apiUrl}/endereco/${id}`);
  }

  atualizarEndereco(id: number, enderecoAtualizado: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(`${this.apiUrl}/${id}`, enderecoAtualizado);
  }

  excluirEndereco(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
