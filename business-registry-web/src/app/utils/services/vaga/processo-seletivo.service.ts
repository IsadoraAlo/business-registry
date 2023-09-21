import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcessoSeletivo } from '../../models/vaga/processo-seletivo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoSeletivoService {

  private apiUrl = 'http://localhost:8080/processos';

  constructor(private http: HttpClient) { }

  criarProcessoSeletivo(processo: ProcessoSeletivo): Observable<ProcessoSeletivo> {
    return this.http.post<ProcessoSeletivo>(this.apiUrl, processo);
  }

  obterProcessoSeletivos(): Observable<ProcessoSeletivo[]> {
    return this.http.get<ProcessoSeletivo[]>(this.apiUrl);
  }

  obterProcessoSeletivosCandidatoId(id: number): Observable<ProcessoSeletivo[]> {
    return this.http.get<ProcessoSeletivo[]>(`${this.apiUrl}/candidato/${id}`);
  }

  obterProcessoSeletivoPorId(id: number): Observable<ProcessoSeletivo> {
    return this.http.get<ProcessoSeletivo>(`${this.apiUrl}/${id}`);
  }

  atualizarProcessoSeletivo(id: number, processoAtualizado: ProcessoSeletivo): Observable<ProcessoSeletivo> {
    return this.http.put<ProcessoSeletivo>(`${this.apiUrl}/${id}`, processoAtualizado);
  }

  excluirProcessoSeletivoPorVaga(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/vaga/${id}`);
  }

  excluirProcessoSeletivo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
