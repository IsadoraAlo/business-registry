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

  criarEntrevista(entrevista: Entrevista): Observable<Entrevista> {
    return this.http.post<Entrevista>(this.apiUrl, entrevista);
  }

  obterEntrevistas(): Observable<Entrevista[]> {
    return this.http.get<Entrevista[]>(this.apiUrl);
  }

  obterEntrevistaPorId(id: number): Observable<Entrevista> {
    return this.http.get<Entrevista>(`${this.apiUrl}/${id}`);
  }

  atualizarEntrevista(id: number, entrevistaAtualizado: Entrevista): Observable<Entrevista> {
    return this.http.put<Entrevista>(`${this.apiUrl}/${id}`, entrevistaAtualizado);
  }

  excluirEntrevista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
