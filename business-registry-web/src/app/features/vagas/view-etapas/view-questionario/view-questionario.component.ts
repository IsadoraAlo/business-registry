import { ProcessoSeletivo } from './../../../../utils/models/vaga/processo-seletivo.model';
import { RespostaService } from 'src/app/utils/services/vaga/questionario/resposta.service';
import { PerguntaService } from 'src/app/utils/services/vaga/questionario/pergunta.service';
import { Component } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';
import { Pergunta } from 'src/app/utils/models/vaga/questionario/pergunta.model';
import { Questionario } from 'src/app/utils/models/vaga/questionario/questionario.model';
import { QuestionarioService } from 'src/app/utils/services/vaga/questionario/questionario.service';
import { Resposta } from 'src/app/utils/models/vaga/questionario/resposta.model';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-questionario',
  templateUrl: './view-questionario.component.html',
  styleUrls: ['./view-questionario.component.scss']
})
export class ViewQuestionarioComponent {
  public inquerito: { pergunta: Pergunta, respostas: Resposta[] }[] = [];
  public questionario: Questionario = new Questionario();
  public etapa: Etapa = new Etapa();
  public perguntas: Pergunta[] = [];
  respostasDadas: number[] = [];

  constructor(
    private questionarioService: QuestionarioService,
    private perguntaService: PerguntaService,
    private respostaService: RespostaService,
    private processoSeletivoService: ProcessoSeletivoService,
    private local: LocalStorage,
    private router: Router
  ) { }

  public respostaDada(resposta: number, pergunta: number, index: number): void {
    const inqueritoItem = this.inquerito.find((item) => item.pergunta.id === pergunta);
    this.respostasDadas[index] = inqueritoItem?.respostas[resposta].alternativaCorreta
      ? this.questionario.pontuacaoTotal / this.perguntas.length
      : 0;
  }

  public respostaDissertativa(dissertativa: string, pergunta: number, index: number) {
    const inqueritoItem = this.inquerito.find((item) => item.pergunta.id === pergunta);
    const valorResposta = dissertativa.length === inqueritoItem?.respostas[0].dissertativa.length ?
      this.questionario.pontuacaoTotal / this.perguntas.length
      : (this.questionario.pontuacaoTotal / this.perguntas.length) / 2;
    this.respostasDadas[index] = valorResposta;
  }


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
                error => {
                  console.error(`Erro ao obter respostas para a pergunta ${pergunta.id}: `, error);
                }
              )
            }
          }
          ,
          error => {
            console.error("Erro ao obter perguntas: ", error);
          }
        );
      },
      error => {
        console.error("Erro ao obter questionário: ", error);
      }
    );
  }

  public onSubmit(): void {
    this.saveProcesso();
  }

  public voltarParaRotaAnterior(): void {
    this.router.navigateByUrl(`/etapas/${this.etapa.vagaId}`);
  }

  private saveProcesso(): void {
    const pontuacaoTotal = this.respostasDadas.reduce((acumulador, numero) => acumulador + numero, 0);
    let processoAtivo: ProcessoSeletivo | undefined;
    this.processoSeletivoService.obterProcessoSeletivosCandidatoId(this.local.UsuarioLogado.id).subscribe(
      (processos) => {
        processoAtivo = processos?.find(processo => processo.vagaId === this.etapa.vagaId);
        if (processoAtivo && processoAtivo?.id !== 0) {
          processoAtivo.pontuacaoCandidato = pontuacaoTotal + processoAtivo.pontuacaoCandidato;
          processoAtivo.etapaId = this.etapa.id;
          this.processoSeletivoService.atualizarProcessoSeletivo(processoAtivo.id, processoAtivo).subscribe(
            () => this.voltarParaRotaAnterior()
          );
        }
      },
      error => {
        console.error('Erro ao obter processos seletivos:', error);
      }
    );
  }

}
