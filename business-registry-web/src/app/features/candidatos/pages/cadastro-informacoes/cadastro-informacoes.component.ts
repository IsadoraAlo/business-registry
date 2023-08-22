import { catchError, throwError } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { Endereco } from 'src/app/utils/models/usuario/endereco.model';
import { EnderecoService } from 'src/app/utils/services/usuario/endereco.service';
import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { TipoCompetencia } from 'src/app/utils/enum/competencia.enum';
import { CompetenciaService } from 'src/app/utils/services/usuario/candidato/competencia.service';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';

@Component({
  selector: 'app-cadastro-informacoes',
  templateUrl: './cadastro-informacoes.component.html',
  styleUrls: ['./cadastro-informacoes.component.scss']
})
export class CadastroInformacoesComponent {
  public competencias: Competencia[] = [];
  public endereco: Endereco = new Endereco();
  public candidato: Candidato = new Candidato();
  public usuario: Usuario = this.local.UsuarioLogado;

  constructor(
    private router: Router,
    private local: LocalStorage,
    private enderecoService: EnderecoService,
    private candidatoService: CandidatoService,
    private competenciaService: CompetenciaService,
    private usuarioService: UsuarioService
  ) { }

  private saveCompetencia(): void {
    for (const competencia of this.competencias) {
      competencia.candidato;
      competencia.dataInicio.toISOString();
      competencia.dataTermino.toISOString();
      competencia.tipo = TipoCompetencia.EXPERIENCIA
      this.competenciaService.criarCompetencia(competencia)
        .pipe(
          catchError((error) => {
            console.error('Erro ao criar competência:', error);
            return throwError(() => error);
          })
        )
        .subscribe();
    }
  }

  private saveEndereco(): void {
    this.endereco.pais = 'Brasil';
    this.endereco.usuario = this.local.UsuarioLogado;
    this.enderecoService.criarEndereco(this.endereco)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar endereço:', error);
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  private saveCandidato(): void {
    this.candidato.usuario = this.local.UsuarioLogado;
    this.candidatoService.criarCandidato(this.candidato)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar candidato:', error);
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  private attUsuario(): void {
    this.usuarioService.atualizarUsuario(this.usuario.id, this.usuario)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar usuário:', error);
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  public onSubmit(): void {
    this.saveEndereco();
    this.saveCandidato();
    this.saveCompetencia();
    this.attUsuario();
    this.router.navigate(['candidatos', 'pagina-inicial'])
  }
}
