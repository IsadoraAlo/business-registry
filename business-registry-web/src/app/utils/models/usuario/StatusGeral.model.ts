export class StatusGeral {
  id: number;
  isUsuarioBanido: boolean;
  isUsuarioDesativado: boolean;
  motivo: string;

  constructor() {
    this.id = 0
    this.isUsuarioBanido = false;
    this.isUsuarioDesativado = false;
    this.motivo = '';
  }
}
