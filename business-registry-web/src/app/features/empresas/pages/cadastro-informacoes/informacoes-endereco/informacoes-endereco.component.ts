import { Component, Input } from '@angular/core';
import { estadosList } from 'src/app/utils/lists/estados.utils';
import { Endereco } from 'src/app/utils/models/usuario/endereco.model';

@Component({
  selector: 'app-informacoes-endereco',
  templateUrl: './informacoes-endereco.component.html',
})
export class InformacoesEnderecoComponent {
  @Input() public i!:number;
  @Input() public endereco!: Endereco;
  public estados = estadosList;
  public cidades: any;

  public getSelectedValue(estadoSelecionado: string): void {
    const estado = this.estados.find((estado) => estado.sigla === estadoSelecionado);
    this.cidades = estado?.cidades;
  }
}
