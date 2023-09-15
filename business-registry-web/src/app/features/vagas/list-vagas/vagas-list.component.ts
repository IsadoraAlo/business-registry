import { VagaService } from 'src/app/utils/services/vaga/vaga.service';
import { Component, OnInit } from '@angular/core';
import { estadosList } from 'src/app/utils/lists/estados.utils';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { Router } from '@angular/router';

@Component({
  selector: 'vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.scss']
})
export class VagasListComponent implements OnInit {
  public vagasDeficiente: boolean = false;
  public estadoSelecionado: string = '';
  public estados = estadosList;
  public vagas: Vaga[] = [];

  constructor(
    private vagaService: VagaService,
    private router: Router,
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

  public vagaDetails(id: number): void {
    this.router.navigate(['vagas', 'view', id]);
  }

  public onClickVagasDeficiente(): void {
    this.vagasDeficiente = !this.vagasDeficiente;
  }
}
