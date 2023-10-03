import { Component, Input } from '@angular/core';
import { competenciasSociaisList } from 'src/app/utils/lists/competencias-sociais.utils';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';

@Component({
  selector: 'competencia-social',
  templateUrl: './competencia-social.component.html',
})
export class CompetenciaSocialComponent {
  @Input() competencia!: Competencia;
  @Input() indexComponent!: number;
  public sociais = competenciasSociaisList;
}
