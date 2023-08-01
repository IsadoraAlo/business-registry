import { Resposta } from "./resposta.model";

export class Questionario {
  id: number;
  respostas: Resposta[];
  pergunta: string;
  pontuacao: number;

  constructor() {
    this.id = 0;
    this.respostas = [];
    this.pergunta = '';
    this.pontuacao = 0;
  }
}
