import { RespostaService } from 'src/app/utils/services/vaga/questionario/resposta.service';
import { PerguntaService } from 'src/app/utils/services/vaga/questionario/pergunta.service';
import { Component } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';
import { Pergunta } from 'src/app/utils/models/vaga/questionario/pergunta.model';
import { Questionario } from 'src/app/utils/models/vaga/questionario/questionario.model';
import { QuestionarioService } from 'src/app/utils/services/vaga/questionario/questionario.service';
import { Resposta } from 'src/app/utils/models/vaga/questionario/resposta.model';

@Component({
  selector: 'app-view-questionario',
  templateUrl: './view-questionario.component.html',
  styleUrls: ['./view-questionario.component.scss']
})
export class ViewQuestionarioComponent {
  public etapa: Etapa = new Etapa();
  public questionario: Questionario = new Questionario();
  public perguntas: Pergunta[] = [];
  public inquerito: { pergunta: Pergunta, respostas: Resposta[] }[] = [];

  constructor(
    private questionarioService: QuestionarioService,
    private perguntaService: PerguntaService,
    private respostaService: RespostaService,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    this.questionarioService.obterQuestionarioPorId(this?.local?.Etapa?.id).subscribe(
      (questionario) => {
        this.questionario = questionario;
        this.etapa = this?.local?.Etapa;
        this?.local?.cleanStorage('Etapa');
        this.perguntaService.obterPerguntaPorQuestionarioId(this?.questionario?.id).subscribe(
          (perguntas) => {
            this.perguntas = perguntas;
            for (const pergunta of perguntas) {
              this.respostaService.obterRespostaPorPerguntaId(pergunta?.id).subscribe(
                (respostas) => {
                  this?.inquerito.push({ pergunta, respostas })
                },
                (error) => {
                  console.error(`Erro ao obter respostas para a pergunta ${pergunta.id}: `, error);
                }
              )
            }
          }
          ,
          (error) => {
            console.error("Erro ao obter perguntas: ", error);
          }
        );
      },
      (error) => {
        console.error("Erro ao obter questionário: ", error);
      }
    );
  }

}
