import { Component } from '@angular/core';
import { Entrevista } from 'src/app/utils/models/vaga/entrevista.model';

@Component({
  selector: 'app-etapa-entrevista',
  templateUrl: './etapa-entrevista.component.html',
  styleUrls: ['./etapa-entrevista.component.scss']
})
export class EtapaEntrevistaComponent {
  public entrevista: Entrevista = new Entrevista();

  public onSubmit(): void{

  }
}
