import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { generoList } from 'src/app/utils/lists/genero.utils';
import { etniaList } from 'src/app/utils/lists/etnia.utils';
import { deficienciaList } from 'src/app/utils/lists/deficiencia.utils';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.component.html',
  styleUrls: ['./informacoes-pessoais.component.scss']
})
export class InformacoesPessoaisComponent {
  public candidato: Candidato = new Candidato();
  public generos = generoList;
  public etnias = etniaList;
  public deficiencias = deficienciaList;

  constructor(
    private candidatoService: CandidatoService,
    private router: Router,
    private local:LocalStorage
  ) { }

  private saveCandidato(): void {
    this.candidato.usuario = this.local.UsuarioLogado;
    this.candidatoService.criarCandidato(this.candidato)
    .pipe(
      catchError((error) => {
        console.error('Erro ao criar endereço:', error);
        return throwError(() => error);
      })
    )
    .subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  public onSubmit(): void {
    this.saveCandidato();
  }

}
