import { FiltroService } from './../../../utils/services/vaga/filtro-vaga.service';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';
import { Component, OnInit } from '@angular/core';
import { estadosList } from 'src/app/utils/lists/estados.utils';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { Router } from '@angular/router';
import { areaAtuacaoList } from 'src/app/utils/lists/area-atuacao.utils';
import { cargosList } from 'src/app/utils/lists/cargos.utils';
import { deficienciaList } from 'src/app/utils/lists/deficiencia.utils';
import { etniaList } from 'src/app/utils/lists/etnia.utils';
import { generoList } from 'src/app/utils/lists/genero.utils';
import { modalidadeList } from 'src/app/utils/lists/modalidade.utils';

@Component({
  selector: 'vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.scss']
})
export class VagasListComponent implements OnInit {
  public vagasDeficiente: boolean = false;
  public vagas: Vaga[] = [];
  public deficiencias = deficienciaList;
  public modalidades = modalidadeList;
  public areas = areaAtuacaoList;
  public cargos = cargosList;
  public generos = generoList;
  public etnias =  etniaList;

  constructor(
    private vagaService: VagaService,
    private router: Router,
    private filtroService: FiltroService
  ) { }

  ngOnInit(): void {
    this.vagaService.obterVagas().subscribe(vagas => this.vagas = vagas);
  }

  public filtrarPorModalidade(modalidade: string): void {
    this.filtroService.filtrarPorModalidade(modalidade).subscribe(
      (vagas) => {
        this.vagas = vagas
      },
    );
  }

  public filtrarPorDeficiencia(deficiencia: string): void {
    this.filtroService.filtrarPorDeficiencia(deficiencia).subscribe(
      (vagas) => {
        this.vagas = vagas
      },
    );
  }

  public filtrarPorCargo(cargo: string): void {
    this.filtroService.filtrarPorCargo(cargo).subscribe(
      (vagas) => {
        this.vagas = vagas
      },
    );
  }

  public filtrarPorGenero(genero: string): void {
    this.filtroService.filtrarPorGenero(genero).subscribe(
      (vagas) => {
        this.vagas = vagas
      },
    );
  }

  public filtrarPorEtnia(etnia: string): void {
    this.filtroService.filtrarPorEtnia(etnia).subscribe(
      (vagas) => {
        this.vagas = vagas
      },
    );
  }

  public filtrarPorArea(area: string): void {
    this.filtroService.filtrarPorAreaAtuacao(area).subscribe(
      (vagas) => {
        this.vagas = vagas
      },
    );
  }

  public vagaDetails(id: number): void {
    this.router.navigate(['vagas', 'view', id]);
  }

  public onClickVagasDeficiente(): void {
    this.vagasDeficiente = !this.vagasDeficiente;
  }
}
