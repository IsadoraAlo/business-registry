import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrevista } from '../../models/vaga/entrevista.model';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  private apiUrl = 'http://localhost:8080/entrevistas';

  constructor(private http: HttpClient) { }

  // Método para criar uma nova entrevista
  criarEntrevista(entrevista: Entrevista): Observable<Entrevista> {
    return this.http.post<Entrevista>(this.apiUrl, entrevista);
  }

  // Método para obter todas as entrevistas
  obterEntrevistas(): Observable<Entrevista[]> {
    return this.http.get<Entrevista[]>(this.apiUrl);
  }

  // Método para obter uma entrevista pelo ID
  obterEntrevistaPorId(id: number): Observable<Entrevista> {
    return this.http.get<Entrevista>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar uma entrevista existente
  atualizarEntrevista(id: number, entrevistaAtualizado: Entrevista): Observable<Entrevista> {
    return this.http.put<Entrevista>(`${this.apiUrl}/${id}`, entrevistaAtualizado);
  }

  // Método para excluir uma entrevista pelo ID
  excluirEntrevista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
