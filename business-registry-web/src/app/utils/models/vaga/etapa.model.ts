import { Entrevista } from "./entrevista.model";
import { Questionario } from "./questionario/questionario.model";
export class Etapa {
  id: number;
  tipo: string;
  descricao: string;
  numeracao: number;
  questionario: Questionario[];
  entrevista: Entrevista;

  constructor() {
    this.id = 0;
    this.tipo = '';
    this.descricao = '';
    this.numeracao = 0;
    this.questionario = [];
    this.entrevista = new Entrevista();
  }
}
