import { throwError, catchError } from 'rxjs';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from './../../../../../utils/services/usuario/usuario.service';
import { Component } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { CompetenciaService } from 'src/app/utils/services/usuario/candidato/competencia.service';
import { TipoCompetencia } from 'src/app/utils/enum/competencia.enum';

@Component({
  selector: 'app-informacoes-profissionais',
  templateUrl: './informacoes-profissionais.component.html',
  styleUrls: ['./informacoes-profissionais.component.scss']
})
export class InformacoesProfissionaisComponent {
  public usuario: Usuario = this.local.UsuarioLogado;
  public indexComponent: number = 1;
  public competencias: Competencia[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private competenciaService: CompetenciaService,
    private router: Router,
    private local:LocalStorage,
  ) {  }

  onClickAdd() {
    this.competencias.push(new Competencia());
  }

  onClickRemove() {
    if (this.competencias.length > 1) {
      this.competencias.pop();
    }
  }

  private saveCompetencia(): void {
    for (const competencia of this.competencias) {
      competencia.tipo = TipoCompetencia.EXPERIENCIA
      competencia.dataInicio.toISOString();
      competencia.dataTermino.toISOString();
      this.competenciaService.criarCompetencia(competencia)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar competência:', error);
          return throwError(() => error);
        })
      )
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        },
      );
    }
  }

  private saveUsuario(): void {
    this.usuarioService.atualizarUsuario(this.usuario.id, this.usuario)
    .pipe(
      catchError((error) => {
        console.error('Erro ao criar usuário:', error);
        return throwError(() => error);
      })
    )
    .subscribe(() => {

    });
  }

  public onSubmit(): void {
    this.saveUsuario();
    this.saveCompetencia();
  }
}
