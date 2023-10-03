import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusGeral } from '../../models/usuario/StatusGeral.model';

@Injectable({
  providedIn: 'root'
})
export class StatusGeralService {

  private baseUrl = 'http://localhost:8080/status-gerais';

  constructor(private http: HttpClient) { }

  criarStatusGeral(statusGeral: StatusGeral): Observable<StatusGeral> {
    return this.http.post<StatusGeral>(`${this.baseUrl}`, statusGeral);
  }

  obterStatusGerais(): Observable<StatusGeral[]> {
    return this.http.get<StatusGeral[]>(`${this.baseUrl}`);
  }

  obterStatusGeralPorId(id: number): Observable<StatusGeral> {
    return this.http.get<StatusGeral>(`${this.baseUrl}/${id}`);
  }

  atualizarStatusGeral(id: number, statusGeral: StatusGeral): Observable<StatusGeral> {
    return this.http.put<StatusGeral>(`${this.baseUrl}/${id}`, statusGeral);
  }

  excluirStatusGeral(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
