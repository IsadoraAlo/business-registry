import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';

@Component({
  selector: 'app-boas-vindas-candidato',
  templateUrl: './boas-vindas-candidato.component.html',
  styleUrls: ['./boas-vindas-candidato.component.scss']
})
export class BoasVindasCandidatoComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  constructor(private localStorage: LocalStorage) { }

  ngOnInit() {
    this.usuario = this.localStorage?.UsuarioLogado;
  }

}
