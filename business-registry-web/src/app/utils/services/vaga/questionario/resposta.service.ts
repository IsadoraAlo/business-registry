import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resposta } from 'src/app/utils/models/vaga/questionario/resposta.model';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  private apiUrl = 'http://localhost:8080/respostas';

  constructor(private http: HttpClient) { }

  criarResposta(resposta: Resposta): Observable<Resposta> {
    return this.http.post<Resposta>(this.apiUrl, resposta);
  }

  obterRespostas(): Observable<Resposta[]> {
    return this.http.get<Resposta[]>(this.apiUrl);
  }

  obterRespostaPorId(id: number): Observable<Resposta> {
    return this.http.get<Resposta>(`${this.apiUrl}/${id}`);
  }

  obterRespostaPorPerguntaId(id: number): Observable<Resposta[]> {
    return this.http.get<Resposta[]>(`${this.apiUrl}/pergunta/${id}`);
  }

  atualizarResposta(id: number, respostaAtualizado: Resposta): Observable<Resposta> {
    return this.http.put<Resposta>(`${this.apiUrl}/${id}`, respostaAtualizado);
  }

  excluirResposta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
