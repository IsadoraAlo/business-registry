import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Entrevista } from 'src/app/utils/models/vaga/entrevista.model';
import { EntrevistaService } from 'src/app/utils/services/vaga/entrevista.service';

@Component({
  selector: 'modal-entrevista',
  templateUrl: './etapa-entrevista.component.html',
  styleUrls: ['./etapa-entrevista.component.scss']
})
export class EtapaEntrevistaComponent {
  public entrevista: Entrevista = new Entrevista();
  public showModal: boolean = false;

  constructor(
    private entrevistaService: EntrevistaService,
  ) { }

  public exibirModal(){
    this.showModal = !this.showModal;
  }

  private saveEntrevista(): void {
    this.entrevistaService.criarEntrevista(this.entrevista)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar entrevista:', error);
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  public onSubmit(): void{
    this.saveEntrevista();
    this.exibirModal();
  }
}
