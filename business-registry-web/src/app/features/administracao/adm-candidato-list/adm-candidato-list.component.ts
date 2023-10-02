import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from 'src/app/utils/enum/candidato.enum';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';

@Component({
  selector: 'app-adm-candidato-list',
  templateUrl: './adm-candidato-list.component.html',
  styleUrls: ['./adm-candidato-list.component.scss']
})
export class AdmCandidatoListComponent {
  public usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioService.obterUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
      this.usuarios = this.usuarios.filter((usuario) => usuario.tipo === TipoUsuario.CANDIDATO)
    });
  }

  public usuarioDetails(id: number): void {
    this.router.navigate(['administrativo', 'view', id]);
  }
}
