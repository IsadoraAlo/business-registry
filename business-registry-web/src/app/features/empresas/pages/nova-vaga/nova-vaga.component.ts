import { Component } from '@angular/core';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';

@Component({
  selector: 'app-nova-vaga',
  templateUrl: './nova-vaga.component.html',
  styleUrls: ['./nova-vaga.component.scss']
})
export class NovaVagaComponent {
  public vaga: Vaga = new Vaga();
  public onSubmit(): void {}
}
