import { Component, Input } from '@angular/core';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';

@Component({
  selector: 'app-experiencias-anteriores',
  templateUrl: './experiencias-anteriores.component.html',
})
export class ExperienciasAnterioresComponent {
  @Input() public i!:number;
  @Input() public competencia!: Competencia;
}
