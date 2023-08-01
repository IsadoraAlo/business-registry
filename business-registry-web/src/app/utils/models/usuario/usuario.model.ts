import { Endereco } from "./endereco.model";

export class Usuario {
  id: number;
  tipo: string;
  nome: string;
  email: string;
  documento: string;
  senha: string;
  celular: string;
  status: boolean;
  enderecos: Endereco[];

  constructor() {
    this.id = 0;
    this.tipo = '';
    this.nome = '';
    this.email = '';
    this.documento = '';
    this.senha = '';
    this.celular = '';
    this.status = false;
    this.enderecos = [];
  }
}
