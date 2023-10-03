import { competenciasList } from './../../../../utils/lists/competencias.utils';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { TipoCompetencia } from 'src/app/utils/enum/competencia.enum';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { CompetenciaService } from 'src/app/utils/services/usuario/candidato/competencia.service';
import { EnderecoService } from 'src/app/utils/services/usuario/endereco.service';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';

@Component({
  selector: 'app-candidatos-competencia',
  templateUrl: './candidatos-competencia.component.html',
  styleUrls: ['./candidatos-competencia.component.scss']
})
export class CandidatosCompetenciaComponent implements OnInit {
  public candidato: Candidato = new Candidato();
  public tipoCompetencias = competenciasList;
  public competencias: Competencia[] = [];
  public indexComponent: number = 0;

  constructor(
    private router: Router,
    private local: LocalStorage,
    private candidatoService: CandidatoService,
    private competenciaService: CompetenciaService,
  ) { }

  ngOnInit(): void {
    this.candidatoService.obterCandidatoPorId(this.local.UsuarioLogado.id).subscribe((candidato) => this.candidato = candidato);
  }

  public onClickAdd(): void {
    this.competencias.push(new Competencia());
    ++this.indexComponent;
  }

  public onClickRemove(): void {
    if (this.competencias.length > 1) {
      this.competencias.pop();
      --this.indexComponent;
    }
  }

  private saveCompetencia(): void {
    for (const competencia of this.competencias) {
      competencia.candidato = this.candidato;
      this.competenciaService.criarCompetencia(competencia)
        .pipe(
          catchError((error) => {
            console.error('Erro ao criar competência:', error);
            return throwError(() => error);
          })
        ).subscribe(()=>this.router.navigate(['/candidatos/view']))
    }
  }

  public onSubmit(): void {
    this.saveCompetencia();
  }

}
