import { Component, Input } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { tipoPerguntaList } from 'src/app/utils/lists/tipo-perguntas.utils';
import { Pergunta } from 'src/app/utils/models/vaga/questionario/pergunta.model';
import { Questionario } from 'src/app/utils/models/vaga/questionario/questionario.model';
import { QuestionarioService } from 'src/app/utils/services/vaga/questionario/questionario.service';

@Component({
  selector: 'modal-questionario',
  templateUrl: './etapa-questionario.component.html',
  styleUrls: ['./etapa-questionario.component.scss']
})
export class EtapaQuestionarioComponent {
  @Input() indexComponent!: number;
  @Input() idQuestionario!: number;

  public questionario: Questionario = new Questionario();

  public perguntasNovas: boolean[] = [];
  public perguntas: Pergunta[] = [];
  public isFormSubmitted: boolean = false;
  public showModal: boolean = false;
  public tipoPergunta: string = '';
  public tipos = tipoPerguntaList;

  constructor(
    private questionarioService: QuestionarioService,
  ) { }

  public exibirModal() {
    this.showModal = !this.showModal;
  }

  public onClickAdd() {
    if (this.perguntas.length < 10) {
      this.perguntas.push(new Pergunta());
      this.perguntasNovas.push(true);
      ++this.indexComponent;
    }
  }

  public onClickRemove() {
    if (this.perguntas.length > 1) {
      this.perguntasNovas.pop();
      --this.indexComponent;
      this.perguntas.pop();
    }
  }

  public getSelectedValue(tipoPergunta: string): void {
    this.tipoPergunta = tipoPergunta;
  }

  private saveQuestionario(): void {
    this.questionario.id = this.idQuestionario
    this.questionarioService.criarQuestionario(this.questionario)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar questionário:', error);
          return throwError(() => error);
        })
      )
      .subscribe();
    this.isFormSubmitted = true
  }

  public onSubmit(): void {
    this.saveQuestionario();
  }
}

