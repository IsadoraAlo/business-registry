import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../../models/vaga/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  private apiUrl = 'http://localhost:8080/vagas';

  constructor(private http: HttpClient) { }

  // Método para criar uma nova vaga
  criarVaga(vaga: Vaga): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl, vaga);
  }

  // Método para obter todas as vagas
  obterVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  // Método para obter uma vaga pelo ID
  obterVagaPorId(id: number): Observable<Vaga> {
    return this.http.get<Vaga>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar uma vaga existente
  atualizarVaga(id: number, vagaAtualizado: Vaga): Observable<Vaga> {
    return this.http.put<Vaga>(`${this.apiUrl}/${id}`, vagaAtualizado);
  }

  // Método para excluir uma vaga pelo ID
  excluirVaga(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
