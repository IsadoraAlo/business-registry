import { Component, Input } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Entrevista } from 'src/app/utils/models/vaga/entrevista.model';
import { EntrevistaService } from 'src/app/utils/services/vaga/entrevista.service';

@Component({
  selector: 'app-etapa-questionario',
  templateUrl: './etapa-questionario.component.html',
  styleUrls: ['./etapa-questionario.component.scss']
})
export class EtapaQuestionarioComponent {
  @Input() indexComponent!: number;
  @Input() idEntrevista!: number;
  public entrevista: Entrevista = new Entrevista();
  public showModal: boolean = false;

  constructor(
    private entrevistaService: EntrevistaService,
  ) { }

  public exibirModal() {
    this.showModal = !this.showModal;
  }

  private saveEntrevista(): void {
    this.entrevista.id = this.idEntrevista
    this.entrevistaService.criarEntrevista(this.entrevista)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar entrevista:', error);
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  private cleanForm(): void{
    this.entrevista = new Entrevista();
  }

  public onSubmit(): void {
      this.saveEntrevista();
      this.exibirModal();
      this.cleanForm();
  }
}

