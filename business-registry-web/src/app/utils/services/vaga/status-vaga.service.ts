import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusVaga } from '../../models/vaga/status-vaga.model';

@Injectable({
  providedIn: 'root'
})
export class StatusVagaService {

  private baseUrl = 'http://localhost:8080/status-vagas';

  constructor(private http: HttpClient) { }

  criarStatusVaga(statusVaga: StatusVaga): Observable<StatusVaga> {
    return this.http.post<StatusVaga>(`${this.baseUrl}`, statusVaga);
  }

  obterStatusGerais(): Observable<StatusVaga[]> {
    return this.http.get<StatusVaga[]>(`${this.baseUrl}`);
  }

  obterStatusVagaPorId(id: number): Observable<StatusVaga> {
    return this.http.get<StatusVaga>(`${this.baseUrl}/${id}`);
  }

  atualizarStatusVaga(id: number, statusVaga: StatusVaga): Observable<StatusVaga> {
    return this.http.put<StatusVaga>(`${this.baseUrl}/${id}`, statusVaga);
  }

  excluirStatusVaga(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
