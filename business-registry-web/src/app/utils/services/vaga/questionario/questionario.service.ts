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

  // Método para criar um novo questionário
  criarQuestionario(questionario: Questionario): Observable<Questionario> {
    return this.http.post<Questionario>(this.apiUrl, questionario);
  }

  // Método para obter todos os questionários
  obterQuestionarios(): Observable<Questionario[]> {
    return this.http.get<Questionario[]>(this.apiUrl);
  }

  // Método para obter um questionário pelo ID
  obterQuestionarioPorId(id: number): Observable<Questionario> {
    return this.http.get<Questionario>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar um questionário existente
  atualizarQuestionario(id: number, questionarioAtualizado: Questionario): Observable<Questionario> {
    return this.http.put<Questionario>(`${this.apiUrl}/${id}`, questionarioAtualizado);
  }

  // Método para excluir um questionário pelo ID
  excluirQuestionario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
