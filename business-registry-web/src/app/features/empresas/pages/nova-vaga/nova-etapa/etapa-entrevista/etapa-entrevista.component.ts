import { Component, Input } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Entrevista } from 'src/app/utils/models/vaga/entrevista.model';
import { EntrevistaService } from 'src/app/utils/services/vaga/entrevista.service';

@Component({
  selector: 'modal-entrevista',
  templateUrl: './etapa-entrevista.component.html',
  styleUrls: ['./etapa-entrevista.component.scss']
})
export class EtapaEntrevistaComponent {
  @Input() idEntrevista!: number;
  public entrevista: Entrevista = new Entrevista();
  public showModal: boolean = false;

  constructor(
    private entrevistaService: EntrevistaService,
  ) { }

  public onDateInputKeydown(event: KeyboardEvent): void {
    (event.target as HTMLInputElement).value = '';
    event.preventDefault();
    this.entrevista.data = new Date('');
  }

  public exibirModal(): void {
    this.showModal = !this.showModal;
  }

  public getMinDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  public getMaxDate(): string {
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
    return threeMonthsFromNow.toISOString().split('T')[0];
  }

  private saveEntrevista(): void {
    console.log(this.entrevista.data)
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

  private cleanForm(): void {
    this.entrevista = new Entrevista();
  }

  public onSubmit(): void {
    this.saveEntrevista();
    this.exibirModal();
    this.cleanForm();
  }
}
