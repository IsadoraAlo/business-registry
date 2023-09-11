export class Questionario {
  id: number;
  pontuacaoTotal: number;
  prazoEnvio: Date;

  constructor() {
    this.id = 0;
    this.pontuacaoTotal = 0;
    this.prazoEnvio = new Date(0);
  }
}
