export class Resposta {
  id: number;
  alternativaCorreta: boolean;
  alternativa: string;
  dissertativa: string;
  perguntaId: number;

  constructor() {
    this.id = 0;
    this.alternativaCorreta = false;
    this.alternativa = '';
    this.dissertativa = '';
    this.perguntaId = 0;
  }
}
