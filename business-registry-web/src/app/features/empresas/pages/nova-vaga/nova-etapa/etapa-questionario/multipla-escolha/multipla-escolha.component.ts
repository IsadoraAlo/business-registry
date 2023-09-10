import { Component, Input } from '@angular/core';
import { Pergunta } from 'src/app/utils/models/vaga/questionario/pergunta.model';
import { Resposta } from 'src/app/utils/models/vaga/questionario/resposta.model';

@Component({
  selector: 'resposta-multipla-escolha',
  templateUrl: './multipla-escolha.component.html',
  styleUrls: ['./multipla-escolha.component.scss']
})
export class MultiplaEscolhaComponent {
  @Input() idQuestionario!: number;
  @Input() pergunta!: Pergunta;
  public resposta: Resposta = new Resposta();
}
