import { Candidato } from "../usuario/candidato/candidato.model";
import { Usuario } from "../usuario/usuario.model";
import { Etapa } from "./etapa.model";
export class Vaga {
  id: number;
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
  status: boolean;
  usuario: Usuario;
  etapas: Etapa[];
  candidatos: Candidato[];

  constructor() {
    this.id = 0;
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
    this.status = true;
    this.usuario = new Usuario();
    this.etapas = [];
    this.candidatos = [];
  }
}
