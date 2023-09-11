import { RespostaService } from './../../../../../../../utils/services/vaga/questionario/resposta.service';
import { Component, Input } from '@angular/core';
import { catchError, throwError, switchMap, forkJoin } from 'rxjs';
import { Pergunta } from 'src/app/utils/models/vaga/questionario/pergunta.model';
import { Resposta } from 'src/app/utils/models/vaga/questionario/resposta.model';
import { PerguntaService } from 'src/app/utils/services/vaga/questionario/pergunta.service';

@Component({
  selector: 'resposta-multipla-escolha',
  templateUrl: './multipla-escolha.component.html',
  styleUrls: ['./multipla-escolha.component.scss']
})
export class MultiplaEscolhaComponent {
  @Input() idQuestionario!: number;
  @Input() pergunta!: Pergunta;
  public isFormSubmitted: boolean = false;
  public respostas: Resposta[] = [new Resposta(), new Resposta(), new Resposta(), new Resposta()];

  constructor(
    private respostaService: RespostaService,
    private perguntaService: PerguntaService
  ) { }

  public setAlternativaCorreta(i: number): void {
    this.respostas.forEach((resposta, index) => {
      resposta.alternativaCorreta = index === i;
    });
  }

  private savePerguntaEResposta(): void {
    this.pergunta.questionarioId = this.idQuestionario;
    this.perguntaService.criarPergunta(this.pergunta)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar pergunta:', error);
          return throwError(() => error);
        }),
        switchMap((pergunta) => {
          const perguntaId = pergunta.id;
          const observables = this.respostas.map((resposta) => {
            resposta.perguntaId = perguntaId;
            return this.respostaService.criarResposta(resposta);
          });
          return forkJoin(observables);
        }),
        catchError((error) => {
          console.error('Erro ao criar resposta:', error);
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        this.isFormSubmitted = true;
      });
  }

  public onSubmit(): void {
    this.savePerguntaEResposta();
  }
}
