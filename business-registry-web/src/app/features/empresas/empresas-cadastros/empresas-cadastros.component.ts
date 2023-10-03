import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { TipoUsuario } from 'src/app/utils/enum/candidato.enum';
import { StatusGeral } from 'src/app/utils/models/usuario/StatusGeral.model';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { StatusGeralService } from 'src/app/utils/services/usuario/status-geral.service';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';
@Component({
  selector: 'app-empresas-cadastros',
  templateUrl: './empresas-cadastros.component.html',
})
export class EmpresasCadastrosComponent {
  statusUsuario: StatusGeral = new StatusGeral();
  usuario: Usuario = new Usuario();
  repetirSenha: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private statusGeralService: StatusGeralService,
  ) { }

  saveUsuario(): void {
    this.usuario.tipo = TipoUsuario.EMPRESA;
    this.usuarioService.criarUsuario(this.usuario)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar usuário:', error);
          return throwError(() => error);
        })
      )
      .subscribe((usuario) => {
        this.router.navigate(['/login']);
        this.saveStatus(usuario);
      });
  }

  private saveStatus(usuario: Usuario): void {
    this.statusUsuario.id = usuario.id;
    this.statusUsuario.isUsuarioBanido = false;
    this.statusUsuario.isUsuarioDesativado = false;
    this.statusUsuario.motivo = '';
    this.statusGeralService.criarStatusGeral(this.statusUsuario).subscribe();
  }

  public onSubmit(): void {
    this.saveUsuario();
  }
}
