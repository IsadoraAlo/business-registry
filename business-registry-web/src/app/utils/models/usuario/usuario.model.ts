import { Endereco } from "./endereco.model";

export class Usuario {
  id: number;
  tipo: string;
  nome: string;
  email: string;
  senha: string;
  sobre: string;
  celular: string;
  status: boolean;
  documento: string;

  constructor() {
    this.id = 0;
    this.tipo = '';
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.sobre = '';
    this.celular = '';
    this.status = false;
    this.documento = '';
  }
}
