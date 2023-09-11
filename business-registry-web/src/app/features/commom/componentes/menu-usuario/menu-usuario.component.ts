import { Component } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent {
  constructor(private local: LocalStorage) { }

  public isMenuSelected: boolean = false;
  public usuario: Usuario = this.local.UsuarioLogado;

  onClickMenu() {
    this.isMenuSelected = !this.isMenuSelected;
  }
}
