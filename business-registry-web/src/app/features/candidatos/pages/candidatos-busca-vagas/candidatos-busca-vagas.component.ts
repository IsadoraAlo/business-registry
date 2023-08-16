import { Component } from '@angular/core';
import { estadosList } from 'src/app/utils/lists/estados.utils';

@Component({
  selector: 'app-candidatos-busca-vagas',
  templateUrl: './candidatos-busca-vagas.component.html',
  styleUrls: ['./candidatos-busca-vagas.component.scss']
})
export class CandidatosBuscaVagasComponent {

  public estados = estadosList;

  public estadoSelecionado: string = '';

  getSelectedValue(event: any) {
    this.estadoSelecionado = event.target.value
  }

  public get cidades() {
    const estado = this.estados.find((estado) => estado.estado === this.estadoSelecionado)
    return estado?.cidades
  }

  public vagasDeficiente: boolean = false;

  public onClickVagasDeficiente(){
    this.vagasDeficiente = !this.vagasDeficiente;
  }
}
