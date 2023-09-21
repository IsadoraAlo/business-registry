import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';

@Component({
  selector: 'modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.scss']
})
export class ModalOptionsComponent {
  public showModal: boolean = false;

  constructor(
    private local: LocalStorage,
    private processoSeletivoService: ProcessoSeletivoService,
    private router: Router
  ) { }

  public exibirModal(): void {
    this.showModal = !this.showModal;
  }

  private excluirProcessoSeletivo(): void {
    this.processoSeletivoService.excluirProcessoSeletivoPorCandidato(this.local.UsuarioLogado.id)
      .subscribe(() => this.router.navigate(['/vagas/buscar']))
  }

  public iniciarProcessoSeletivo(): void{

  }

  public onSubmit(): void {
    this.excluirProcessoSeletivo();
  }
}
