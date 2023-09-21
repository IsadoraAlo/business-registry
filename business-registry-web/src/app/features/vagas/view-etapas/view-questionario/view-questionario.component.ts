import { Component, Input } from '@angular/core';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';
import { Questionario } from 'src/app/utils/models/vaga/questionario/questionario.model';
import { QuestionarioService } from 'src/app/utils/services/vaga/questionario/questionario.service';

@Component({
  selector: 'app-view-questionario',
  templateUrl: './view-questionario.component.html',
  styleUrls: ['./view-questionario.component.scss']
})
export class ViewQuestionarioComponent {
  @Input() etapa!: Etapa;
  public questionario: Questionario = new Questionario();

  constructor(
    private questionarioService: QuestionarioService
  ) { }

  ngOnInit(): void {
    this.questionarioService.obterQuestionarioPorId(this.etapa.id).subscribe(
      (questionario) => this.questionario = questionario
    )
  }
}
