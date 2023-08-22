import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Component, Input } from '@angular/core';
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
  @Input() public candidato!: Candidato;
  public deficiencias = deficienciaList;
  public generos = generoList;
  public etnias = etniaList;
}
