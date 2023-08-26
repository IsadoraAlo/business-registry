import { Component } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { TipoUsuario } from 'src/app/utils/enum/candidato.enum';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
})
export class EmptyStateComponent {
  public usuario: Usuario = this.localStorage?.UsuarioLogado;
  public tipoEmpresa = TipoUsuario.EMPRESA;
  public tipoCandidato = TipoUsuario.CANDIDATO;
  constructor(private localStorage: LocalStorage) { }
}
