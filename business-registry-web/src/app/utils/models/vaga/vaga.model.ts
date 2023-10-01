import { Candidato } from "../usuario/candidato/candidato.model";
import { Usuario } from "../usuario/usuario.model";
import { Etapa } from "./etapa.model";
export class Vaga {
  id: number;
  dataPublicacao: Date;
  titulo: string;
  modalidade: string;
  pretencaoSalarial: string;
  vagaPcd: boolean;
  deficiencia: string;
  qualificacoes: string;
  responsabilidades: string;
  beneficios: string;
  areaAtuacao: string;
  cargo: string;
  genero: string;
  etnia: string;
  status: boolean;
  usuario: Usuario;
  etapas: Etapa[];
  candidatos: Candidato[];

  constructor() {
    this.id = 0;
    this.dataPublicacao = new Date();
    this.titulo = '';
    this.pretencaoSalarial = '';
    this.modalidade = '';
    this.areaAtuacao = '';
    this.qualificacoes = '';
    this.responsabilidades = '';
    this.beneficios = '';
    this.vagaPcd = false;
    this.deficiencia = '';
    this.cargo = '';
    this.genero = '';
    this.etnia = '';
    this.status = true;
    this.usuario = new Usuario();
    this.etapas = [];
    this.candidatos = [];
  }
}
