import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-candidato',
  templateUrl: './menu-candidato.component.html',
  styleUrls: ['./menu-candidato.component.scss']
})
export class MenuCandidatoComponent {
  public nomeCandidato: string = 'Jorge Almeida';
  public isMenuSelected: boolean = false;

  onClickMenu() {
    this.isMenuSelected = !this.isMenuSelected;
  }
}
