import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experiencias-anteriores',
  templateUrl: './experiencias-anteriores.component.html',
  styleUrls: ['./experiencias-anteriores.component.scss']
})
export class ExperienciasAnterioresComponent {
  @Input() public form!: FormGroup;
}
