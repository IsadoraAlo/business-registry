import { Component, Input } from '@angular/core';
import { deficienciaList } from 'src/app/utils/lists/deficiencia.utils';
import { etniaList } from 'src/app/utils/lists/etnia.utils';
import { generoList } from 'src/app/utils/lists/genero.utils';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.component.html',
})
export class InformacoesPessoaisComponent {
  @Input() public candidato!: Candidato;
  public deficiencias = deficienciaList;
  public generos = generoList;
  public etnias = etniaList;
}
