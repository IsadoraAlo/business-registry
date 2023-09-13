import { VagaService } from 'src/app/utils/services/vaga/vaga.service';
import { Component, OnInit } from '@angular/core';
import { estadosList } from 'src/app/utils/lists/estados.utils';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';

@Component({
  selector: 'app-candidatos-busca-vagas',
  templateUrl: './candidatos-busca-vagas.component.html',
  styleUrls: ['./candidatos-busca-vagas.component.scss']
})
export class CandidatosBuscaVagasComponent implements OnInit {
  public vagasDeficiente: boolean = false;
  public estadoSelecionado: string = '';
  public estados = estadosList;
  public vagas: Vaga[] = [];

  constructor(
    private vagaService: VagaService
  ) { }

  ngOnInit(): void {
    this.vagaService.obterVagas().subscribe(vagas => this.vagas = vagas);
  }

  public getSelectedValue(event: any): void {
    this.estadoSelecionado = event.target.value
  }

  public get cidades() {
    const estado = this.estados.find((estado) => estado.estado === this.estadoSelecionado)
    return estado?.cidades
  }


  public onClickVagasDeficiente(): void {
    this.vagasDeficiente = !this.vagasDeficiente;
  }
}
