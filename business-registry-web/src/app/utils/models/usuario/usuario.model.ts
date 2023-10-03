export class Usuario {
  id: number;
  tipo: string;
  nome: string;
  email: string;
  senha: string;
  sobre: string;
  celular: string;
  documento: string;

  constructor() {
    this.id = 0;
    this.tipo = '';
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.sobre = '';
    this.celular = '';
    this.documento = '';
  }
}
