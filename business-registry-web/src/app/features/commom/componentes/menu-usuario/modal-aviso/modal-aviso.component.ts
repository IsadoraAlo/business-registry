import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { StatusGeral } from 'src/app/utils/models/usuario/StatusGeral.model';

@Component({
  selector: 'modal-aviso',
  templateUrl: './modal-aviso.component.html',
  styleUrls: ['./modal-aviso.component.scss']
})
export class ModalAvisoComponent {
  public showModal: boolean = false;
  @Input() public status!: StatusGeral;

  constructor(
    private local: LocalStorage,
    private router: Router
  ) { }

  public exibirModal(): void {
    this.showModal = !this.showModal
  }

  public onClickFechar(): void {
    this.local.cleanAllStorage();
    this.router.navigate(['login']);
  }
}
