export class Endereco {
  id: number;
  pais: string;
  estado: string;
  municipio: string;
  numero: string;

  constructor() {
    this.id = 0;
    this.pais = '';
    this.estado = '';
    this.municipio = '';
    this.numero = '';
  }
}
