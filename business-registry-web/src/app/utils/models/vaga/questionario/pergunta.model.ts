export class Pergunta {
  id: number;
  questao: string;
  pontuacao: number;
  questionarioId: number;

  constructor() {
    this.id = 0;
    this.questao = ''
    this.pontuacao = 0;
    this.questionarioId = 0;
  }
}
