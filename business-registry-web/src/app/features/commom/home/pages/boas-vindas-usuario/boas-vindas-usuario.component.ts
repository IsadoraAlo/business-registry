import { Component } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';

@Component({
  selector: 'app-boas-vindas-usuario',
  templateUrl: './boas-vindas-usuario.component.html',
  styleUrls: ['./boas-vindas-usuario.component.scss']
})
export class BoasVindasUsuarioComponent {
  public usuario: Usuario = this.localStorage?.UsuarioLogado;
  constructor(private localStorage: LocalStorage) { }
}
