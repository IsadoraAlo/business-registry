import { Component, Input } from '@angular/core';
import { competenciasLinguagens } from 'src/app/utils/lists/competencias-linguas.utils';
import { nivelProficienciaList } from 'src/app/utils/lists/nivel-proficiencia.utils';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';

@Component({
  selector: 'competencia-linguagem',
  templateUrl: './competencia-linguagem.component.html',
})
export class CompetenciaLinguagemComponent {
  @Input() competencia!: Competencia;
  @Input() indexComponent!: number;
  public linguas = competenciasLinguagens;
  public nivels = nivelProficienciaList;
}
