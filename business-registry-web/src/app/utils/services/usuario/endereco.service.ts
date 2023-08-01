import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../../models/usuario/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private apiUrl = 'http://localhost:8080/enderecos';

  constructor(private http: HttpClient) { }

  // Método para criar um novo endereço
  criarEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.apiUrl, endereco);
  }

  // Método para obter todos os endereços
  obterEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.apiUrl);
  }

  // Método para obter um endereço pelo ID
  obterEnderecoPorId(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar um endereço existente
  atualizarEndereco(id: number, enderecoAtualizado: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(`${this.apiUrl}/${id}`, enderecoAtualizado);
  }

  // Método para excluir um endereço pelo ID
  excluirEndereco(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
