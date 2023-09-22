import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pergunta } from 'src/app/utils/models/vaga/questionario/pergunta.model';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  private apiUrl = 'http://localhost:8080/perguntas';

  constructor(private http: HttpClient) { }

  criarPergunta(pergunta: Pergunta): Observable<Pergunta> {
    return this.http.post<Pergunta>(this.apiUrl, pergunta);
  }

  obterPerguntas(): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(this.apiUrl);
  }

  obterPerguntaPorId(id: number): Observable<Pergunta> {
    return this.http.get<Pergunta>(`${this.apiUrl}/${id}`);
  }

  obterPerguntaPorQuestionarioId(id: number): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(`${this.apiUrl}/questionario/${id}`);
  }

  atualizarPergunta(id: number, perguntaAtualizado: Pergunta): Observable<Pergunta> {
    return this.http.put<Pergunta>(`${this.apiUrl}/${id}`, perguntaAtualizado);
  }

  excluirPergunta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
