import { Component, Input } from '@angular/core';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';

@Component({
  selector: 'competencia-profissional',
  templateUrl: './competencia-profissional.component.html',
  styleUrls: ['./competencia-profissional.component.scss']
})
export class CompetenciaProfissionalComponent {
  @Input() competencia!: Competencia;
  @Input() indexComponent!: number;
}
