import { Component } from '@angular/core';
import { modalidadeList } from 'src/app/utils/lists/modalidade.utils';
import { Endereco } from 'src/app/utils/models/usuario/endereco.model';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';

@Component({
  selector: 'app-nova-vaga',
  templateUrl: './nova-vaga.component.html',
  styleUrls: ['./nova-vaga.component.scss']
})
export class NovaVagaComponent {
  public vaga: Vaga = new Vaga();
  public modalidades = modalidadeList;
  public onSubmit(): void {}
}
