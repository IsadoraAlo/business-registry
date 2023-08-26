import { Usuario } from "../usuario.model";
import { Competencia } from "./competencia.model";
export class Candidato {
  id: number;
  etnia: string;
  genero: string;
  deficiencia: string;
  rendaFamiliar: string;
  competencias: Competencia[];
  usuario: Usuario;

  constructor() {
    this.id = 0;
    this.etnia = '';
    this.genero = '';
    this.deficiencia = '';
    this.rendaFamiliar = '';
    this.competencias = [];
    this.usuario = new Usuario();
  }
}
