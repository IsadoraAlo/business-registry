import { Component, Input } from '@angular/core';
import { nivelFormacaoList } from 'src/app/utils/lists/nivel-formacao.utils';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';

@Component({
  selector: 'competencia-cursos',
  templateUrl: './competencia-cursos.component.html',
  styleUrls: ['./competencia-cursos.component.scss']
})
export class CompetenciaCursosComponent {
  @Input() competencia!: Competencia;
  @Input() indexComponent!: number;
  public nivels = nivelFormacaoList;
}
