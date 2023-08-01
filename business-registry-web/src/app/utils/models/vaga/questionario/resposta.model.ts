export class Resposta {
  id: number;
  alternativaCorreta: boolean;
  alternativa: string;
  dissertativa: string;

  constructor() {
    this.id = 0;
    this.alternativaCorreta = false;
    this.alternativa = '';
    this.dissertativa = '';
  }
}
