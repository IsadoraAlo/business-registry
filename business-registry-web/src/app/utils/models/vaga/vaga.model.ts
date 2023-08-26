import { Candidato } from "../usuario/candidato/candidato.model";
import { Etapa } from "./etapa.model";
export class Vaga {
  id: number;
  titulo: string;
  qualificacoes: string;
  beneficios: string;
  areaAtuacao: string;
  cargo: string;
  inclusao: string;
  infoAdicional: string;
  status: boolean;
  etapas: Etapa[];
  candidatos: Candidato[];

  constructor() {
    this.id = 0;
    this.titulo = '';
    this.qualificacoes = '';
    this.beneficios = '';
    this.areaAtuacao = '';
    this.cargo = '';
    this.inclusao = '';
    this.infoAdicional = '';
    this.status = false;
    this.etapas = [];
    this.candidatos = [];
  }
}
