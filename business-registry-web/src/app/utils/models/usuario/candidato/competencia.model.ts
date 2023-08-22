import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
export class Competencia {
  id: number;
  tipo: string;
  titulo: string;
  nivel: string;
  instituicao: string;
  dataInicio: Date;
  dataTermino: Date;
  candidato: Candidato;

  constructor() {
    this.id = 0;
    this.tipo = '';
    this.titulo = '';
    this.nivel = '';
    this.instituicao = '';
    this.dataInicio = new Date();
    this.dataTermino = new Date();
    this.candidato = new Candidato()
  }
}
