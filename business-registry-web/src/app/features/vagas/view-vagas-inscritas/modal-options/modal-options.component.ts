import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';

@Component({
  selector: 'modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.scss']
})
export class ModalOptionsComponent {
  @Input() statusCandidato!: boolean;
  @Input() vagaId!: number;
  public showModal: boolean = false;

  constructor(
    private processoSeletivoService: ProcessoSeletivoService,
    private router: Router
  ) { }

  public exibirModal(candidatoAprovado: boolean): void {
    this.showModal = !this.showModal;
    this.statusCandidato = candidatoAprovado;
  }

  private excluirProcessoSeletivo(): void {
    this.processoSeletivoService.excluirProcessoSeletivoPorVaga(this.vagaId)
      .subscribe(() => this.router.navigate(['/vagas/buscar']))
  }

  public iniciarProcessoSeletivo(): void{
    this.router.navigate([`/etapas/${this.vagaId}`])
  }

  public onSubmit(): void {
    this.excluirProcessoSeletivo();
  }
}
