export class Competencia {
  id: number;
  tipo: string;
  titulo: string;
  nivel: string;
  instituicao: string;
  dataInicio: Date;
  dataTermino: Date;

  constructor() {
    this.id = 0;
    this.tipo = '';
    this.titulo = '';
    this.nivel = '';
    this.instituicao = '';
    this.dataInicio = new Date();
    this.dataTermino = new Date();
  }
}
