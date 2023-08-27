import { Component, Input } from '@angular/core';
import { estadosList } from 'src/app/utils/lists/estados.utils';
import { Endereco } from 'src/app/utils/models/usuario/endereco.model';

@Component({
  selector: 'app-endereco-vaga',
  templateUrl: './endereco-vaga.component.html',
  styleUrls: ['./endereco-vaga.component.scss']
})
export class EnderecoVagaComponent {
  @Input() public endereco!: Endereco;
  public estados = estadosList;
  public cidades: any;

  public getSelectedValue(estadoSelecionado: string): void {
    const estado = this.estados.find((estado) => estado.sigla === estadoSelecionado);
    this.cidades = estado?.cidades;
  }
}
