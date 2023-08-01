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

  // Método para criar uma nova etapa
  criarEtapa(etapa: Etapa): Observable<Etapa> {
    return this.http.post<Etapa>(this.apiUrl, etapa);
  }

  // Método para obter todas as etapas
  obterEtapas(): Observable<Etapa[]> {
    return this.http.get<Etapa[]>(this.apiUrl);
  }

  // Método para obter uma etapa pelo ID
  obterEtapaPorId(id: number): Observable<Etapa> {
    return this.http.get<Etapa>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar uma etapa existente
  atualizarEtapa(id: number, etapaAtualizado: Etapa): Observable<Etapa> {
    return this.http.put<Etapa>(`${this.apiUrl}/${id}`, etapaAtualizado);
  }

  // Método para excluir uma etapa pelo ID
  excluirEtapa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
