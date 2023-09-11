// Importe as dependências necessárias
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questionario } from 'src/app/utils/models/vaga/questionario/questionario.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  private apiUrl = 'http://localhost:8080/questionarios';

  constructor(private http: HttpClient) { }

  criarQuestionario(questionario: Questionario): Observable<Questionario> {
    return this.http.post<Questionario>(this.apiUrl, questionario);
  }

  obterQuestionarios(): Observable<Questionario[]> {
    return this.http.get<Questionario[]>(this.apiUrl);
  }

  obterQuestionarioPorId(id: number): Observable<Questionario> {
    return this.http.get<Questionario>(`${this.apiUrl}/${id}`);
  }

  atualizarQuestionario(id: number, questionarioAtualizado: Questionario): Observable<Questionario> {
    return this.http.put<Questionario>(`${this.apiUrl}/${id}`, questionarioAtualizado);
  }

  excluirQuestionario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
