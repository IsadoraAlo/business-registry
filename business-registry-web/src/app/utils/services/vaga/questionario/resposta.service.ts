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

  // Método para criar uma nova resposta
  criarResposta(resposta: Resposta): Observable<Resposta> {
    return this.http.post<Resposta>(this.apiUrl, resposta);
  }

  // Método para obter todas as respostas
  obterRespostas(): Observable<Resposta[]> {
    return this.http.get<Resposta[]>(this.apiUrl);
  }

  // Método para obter uma resposta pelo ID
  obterRespostaPorId(id: number): Observable<Resposta> {
    return this.http.get<Resposta>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar uma resposta existente
  atualizarResposta(id: number, respostaAtualizado: Resposta): Observable<Resposta> {
    return this.http.put<Resposta>(`${this.apiUrl}/${id}`, respostaAtualizado);
  }

  // Método para excluir uma resposta pelo ID
  excluirResposta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
