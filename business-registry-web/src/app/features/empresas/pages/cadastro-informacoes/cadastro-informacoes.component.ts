import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Endereco } from 'src/app/utils/models/usuario/endereco.model';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { EnderecoService } from 'src/app/utils/services/usuario/endereco.service';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';

@Component({
  selector: 'app-cadastro-informacoes',
  templateUrl: './cadastro-informacoes.component.html',
  styleUrls: ['./cadastro-informacoes.component.scss']
})
export class CadastroInformacoesEmpresaComponent {
  public indexComponent: number = 0;
  public usuario: Usuario = this.local.UsuarioLogado;
  public enderecos: Endereco[] = [];

  constructor(
    private local: LocalStorage,
    private enderecoService: EnderecoService,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  public onClickAdd(): void {
    this.enderecos.push(new Endereco());
    ++this.indexComponent
  }

  public onClickRemove(): void {
    if (this.enderecos.length > 1) {
      this.enderecos.pop();
      --this.indexComponent
    }
  }

  private saveEndereco(): void {
    for (const endereco of this.enderecos) {
      endereco.pais = 'Brasil';
      endereco.usuario = this.local.UsuarioLogado;
      this.enderecoService.criarEndereco(endereco)
        .pipe(
          catchError((error) => {
            console.error('Erro ao criar endereço:', error);
            return throwError(() => error);
          })
        )
        .subscribe();
    }
  }

  private attUsuario(): void {
    this.usuarioService.atualizarUsuario(this.usuario.id, this.usuario)
      .pipe(
        catchError((error) => {
          console.error('Erro ao atualizar o usuário:', error);
          return throwError(() => error);
        })
      )
      .subscribe();
    this.local.setUsuarioLogado(this.usuario);
  }

  public onSubmit(): void {
    this.attUsuario();
    this.saveEndereco();
    this.router.navigate(['empresas', 'pagina-inicial'])
  }
}
