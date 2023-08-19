import { Usuario } from "./usuario.model";

export class Endereco {
  id: number;
  usuarioId: number;
  pais: string;
  estado: string;
  municipio: string;
  numero: string;
  logradouro: string;
  cep: string;

  constructor() {
    this.id = 0;
    this.usuarioId = 0;
    this.pais = '';
    this.estado = '';
    this.municipio = '';
    this.numero = '';
    this.cep = '';
    this.logradouro = '';
  }
}
