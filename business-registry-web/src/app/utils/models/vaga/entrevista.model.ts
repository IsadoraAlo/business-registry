export class Entrevista {
  id: number;
  link: string;
  data: Date;

  constructor() {
    this.id = 0;
    this.link = '';
    this.data = new Date();
  }
}
