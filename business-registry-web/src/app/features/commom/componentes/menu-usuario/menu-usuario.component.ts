import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent {
  public nomeCandidato: string = 'Jorge Almeida';
  public isMenuSelected: boolean = false;

  onClickMenu() {
    this.isMenuSelected = !this.isMenuSelected;
  }
}
