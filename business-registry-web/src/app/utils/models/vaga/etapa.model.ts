import { Entrevista } from "./entrevista.model";
import { Questionario } from "./questionario/questionario.model";
export class Etapa {
  id: number;
  tipo: string;
  titulo: string;
  descricao: string;
  numeracao: number;
  questionario: Questionario;
  entrevista: Entrevista;
  vagaId: number;

  constructor() {
    this.id = 0;
    this.tipo = '';
    this.titulo = '';
    this.descricao = '';
    this.numeracao = 0;
    this.questionario = new Questionario();
    this.entrevista = new Entrevista();
    this.vagaId = 0;
  }
}
