import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';
import { Component, Input, AfterViewInit } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Router } from '@angular/router';

@Component({
  selector: 'modal-status-candidato',
  templateUrl: './modal-status-candidato.component.html',
  styleUrls: ['./modal-status-candidato.component.scss']
})
export class ModalStatusCandidatoComponent implements AfterViewInit {
  @Input() public acao!: string;
  public showModal: boolean = false;
  private processo: ProcessoSeletivo = new ProcessoSeletivo();

  constructor(
    private processoSeletivoService: ProcessoSeletivoService,
    private local: LocalStorage,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    this.processo = this.local.Processo;
  }

  public exibirModal(): void {
    this.showModal = !this.showModal;
  }

  public onSubmit(): void {
    this.acao === 'reprovar'
      ? this.processo.candidatoReprovado = true
      : this.processo.candidatoAprovado = true;
    if (this.processo.candidatoReprovado || this.processo.candidatoAprovado) {
      this.processoSeletivoService.atualizarProcessoSeletivo(this.processo.id, this.processo).subscribe(
        () => { this.router.navigate(['/vagas/suas-vagas']) }
      );
    }
  }

}
