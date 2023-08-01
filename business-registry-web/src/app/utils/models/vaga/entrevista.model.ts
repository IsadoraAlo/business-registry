export class Entrevista {
  id: number;
  descricao: string;
  link: string;
  data: Date;

  constructor() {
    this.id = 0;
    this.descricao = '';
    this.link = '';
    this.data = new Date();
  }
}
