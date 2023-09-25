import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-tutorial',
  templateUrl: './modal-tutorial.component.html',
  styleUrls: ['./modal-tutorial.component.scss']
})
export class ModalTutorialComponent {
  public showModal: boolean = false;
  @Input() public isPrimeiroAcesso: boolean = false;

  public exibirModal(): void {
    if (this.isPrimeiroAcesso) {
      this.isPrimeiroAcesso = !this.isPrimeiroAcesso;
      this.showModal = this.isPrimeiroAcesso;
    } else {
      this.showModal = !this.showModal
    }
  }
}
