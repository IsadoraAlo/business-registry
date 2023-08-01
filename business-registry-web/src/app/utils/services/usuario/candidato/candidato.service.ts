// Importe as dependências necessárias
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private apiUrl = 'http://localhost:8080/candidatos';

  constructor(private http: HttpClient) { }

  // Método para criar um novo candidato
  criarCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(this.apiUrl, candidato);
  }

  // Método para obter todos os candidatos
  obterCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.apiUrl);
  }

  // Método para obter um candidato pelo ID
  obterCandidatoPorId(id: number): Observable<Candidato> {
    return this.http.get<Candidato>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar um candidato existente
  atualizarCandidato(id: number, candidatoAtualizado: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(`${this.apiUrl}/${id}`, candidatoAtualizado);
  }

  // Método para excluir um candidato pelo ID
  excluirCandidato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
