import { Component, Input } from '@angular/core';
import { catchError, throwError } from 'rxjs';
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
  public showModal: boolean = false;

  constructor(
    private questionarioService: QuestionarioService,
  ) { }

  public exibirModal() {
    this.showModal = !this.showModal;
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
  }

  private cleanForm(): void{
    this.questionario = new Questionario();
  }

  public onSubmit(): void {
      this.saveQuestionario();
      this.exibirModal();
      this.cleanForm();
  }
}

