import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { TipoUsuario } from 'src/app/utils/enum/candidato.enum';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';
@Component({
  selector: 'app-empresas-cadastros',
  templateUrl: './empresas-cadastros.component.html',
  styleUrls: ['./empresas-cadastros.component.scss']
})
export class EmpresasCadastrosComponent {
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  saveUsuario(): void {
    this.usuario.tipo = TipoUsuario.EMPRESA;
    this.usuario.status = true;
    this.usuarioService.criarUsuario(this.usuario)
    .pipe(
      catchError((error) => {
        console.error('Erro ao criar usuário:', error);
        return throwError(() => error);
      })
    )
    .subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  onSubmit(): void {
    this.saveUsuario();
  }
}
