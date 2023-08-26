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

  criarCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(this.apiUrl, candidato);
  }

  obterCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.apiUrl);
  }

  obterCandidatoPorId(id: number): Observable<Candidato> {
    return this.http.get<Candidato>(`${this.apiUrl}/${id}`);
  }

  atualizarCandidato(id: number, candidatoAtualizado: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(`${this.apiUrl}/${id}`, candidatoAtualizado);
  }

  excluirCandidato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
