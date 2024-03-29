import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { TipoUsuario } from 'src/app/utils/enum/candidato.enum';
import { Login } from 'src/app/utils/models/auth.model';
import { AuthService } from 'src/app/utils/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public erro:boolean = false;
  login: Login = new Login();

  constructor(private authService: AuthService, private router: Router, private localStorage: LocalStorage) { }

  onLogin(): void {
    this.authService.logar(this.login)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar usuário:', error);
          this.erro = true;
          return throwError(() => error);
        })
      )
      .subscribe((login) => {
        this.localStorage.setUsuarioLogado(login);
        if (this.localStorage.UsuarioLogado.tipo === TipoUsuario.ADMIN) {
          this.router.navigate(['/administrativo/pagina-inicial']);
        } else if (this.localStorage.UsuarioLogado.tipo === TipoUsuario.CANDIDATO) {
          this.router.navigate(['/candidatos/pagina-inicial'])
        } else if (this.localStorage.UsuarioLogado.tipo === TipoUsuario.EMPRESA) {
          this.router.navigate(['/empresas/pagina-inicial'])
        }
      });
  }

  onSubmit(): void {
    this.onLogin();
  }
}
