import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etapa } from '../../models/vaga/etapa.model';

@Injectable({
  providedIn: 'root'
})
export class EtapaService {

  private apiUrl = 'http://localhost:8080/etapas';

  constructor(private http: HttpClient) { }

  criarEtapa(etapa: Etapa): Observable<Etapa> {
    return this.http.post<Etapa>(this.apiUrl, etapa);
  }

  obterEtapas(): Observable<Etapa[]> {
    return this.http.get<Etapa[]>(this.apiUrl);
  }

  obterEtapaPorId(id: number): Observable<Etapa> {
    return this.http.get<Etapa>(`${this.apiUrl}/${id}`);
  }

  obterEtapasVagaId(id: number): Observable<Etapa[]> {
    return this.http.get<Etapa[]>(`${this.apiUrl}/vaga/${id}`);
  }

  atualizarEtapa(id: number, etapaAtualizado: Etapa): Observable<Etapa> {
    return this.http.put<Etapa>(`${this.apiUrl}/${id}`, etapaAtualizado);
  }

  excluirEtapa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
