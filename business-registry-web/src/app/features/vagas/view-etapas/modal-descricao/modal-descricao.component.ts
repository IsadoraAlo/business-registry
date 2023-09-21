import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';

@Component({
  selector: 'modal-descricao',
  templateUrl: './modal-descricao.component.html',
  styleUrls: ['./modal-descricao.component.scss']
})
export class ModalDescricaoComponent {
  @Input() etapa!: Etapa;
  public showModal: boolean = false;

  constructor(
    private router: Router,
    private local: LocalStorage
  ){ }

  public exibirModal(): void {
    this.showModal = !this.showModal;
  }

  public comecarEtapa(): void{
    this.local.setEtapa(this.etapa);
    this.etapa.tipo === 'Entrevista' ? this.router.navigateByUrl('etapas/entrevista') : this.router.navigateByUrl('etapas/questionario')
  }
}
