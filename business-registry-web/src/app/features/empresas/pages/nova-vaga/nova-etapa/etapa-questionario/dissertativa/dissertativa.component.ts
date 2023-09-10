import { Resposta } from './../../../../../../../utils/models/vaga/questionario/resposta.model';
import { Pergunta } from './../../../../../../../utils/models/vaga/questionario/pergunta.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'resposta-dissertativa',
  templateUrl: './dissertativa.component.html',
  styleUrls: ['./dissertativa.component.scss']
})
export class DissertativaComponent {
  @Input() idQuestionario!: number;
  @Input() pergunta!: Pergunta;
  public resposta: Resposta = new Resposta();
}
