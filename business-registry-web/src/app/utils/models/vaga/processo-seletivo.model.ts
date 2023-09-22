
export class ProcessoSeletivo {
  id: number;
  candidatoId: number;
  vagaId: number;
  etapaId: number;
  pontuacaoCandidato: number;
  candidatoAprovado: boolean;
  candidatoReprovado: boolean;

  constructor() {
    this.id = 0;
    this.candidatoId = 0;
    this.vagaId = 0;
    this.etapaId = 0;
    this.pontuacaoCandidato = 0;
    this.candidatoAprovado = false;
    this.candidatoReprovado = false;
  }
}
