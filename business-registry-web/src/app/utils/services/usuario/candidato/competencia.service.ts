import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  private apiUrl = 'http://localhost:8080/competencias';

  constructor(private http: HttpClient) { }

  criarCompetencia(competencia: Competencia): Observable<Competencia> {
    return this.http.post<Competencia>(this.apiUrl, competencia);
  }

  obterCompetencias(): Observable<Competencia[]> {
    return this.http.get<Competencia[]>(this.apiUrl);
  }

  obterCompetenciaPorId(id: number): Observable<Competencia> {
    return this.http.get<Competencia>(`${this.apiUrl}/${id}`);
  }

  atualizarCompetencia(id: number, competenciaAtualizado: Competencia): Observable<Competencia> {
    return this.http.put<Competencia>(`${this.apiUrl}/${id}`, competenciaAtualizado);
  }

  excluirCompetencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
