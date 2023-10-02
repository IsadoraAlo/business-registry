import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { areaAtuacaoList } from 'src/app/utils/lists/area-atuacao.utils';
import { cargosList } from 'src/app/utils/lists/cargos.utils';
import { deficienciaList } from 'src/app/utils/lists/deficiencia.utils';
import { etniaList } from 'src/app/utils/lists/etnia.utils';
import { generoList } from 'src/app/utils/lists/genero.utils';
import { modalidadeList } from 'src/app/utils/lists/modalidade.utils';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';
import { FiltroService } from './../../../utils/services/vaga/filtro-vaga.service';

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
  public etnias = etniaList;

  selectedModalidade?: string | null;
  selectedCargo?: string | null;
  selectedArea?: string | null;
  selectedEtnia?: string | null;
  selectedGenero?: string | null;
  selectedDeficiencia?: string | null;

  private cleanFiltros(): void {
    this.selectedModalidade = null;
    this.selectedCargo = null;
    this.selectedArea = null;
    this.selectedEtnia = null;
    this.selectedGenero = null;
    this.selectedDeficiencia = null;
  }
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
        this.vagas = vagas;
        this.cleanFiltros();
        this.selectedModalidade = modalidade;
      },
    );
  }

  public filtrarPorDeficiencia(deficiencia: string): void {
    this.filtroService.filtrarPorDeficiencia(deficiencia).subscribe(
      (vagas) => {
        this.vagas = vagas;
        this.cleanFiltros();
        this.selectedDeficiencia = deficiencia;
      },
    );
  }

  public filtrarPorCargo(cargo: string): void {
    this.filtroService.filtrarPorCargo(cargo).subscribe(
      (vagas) => {
        this.vagas = vagas;
        this.cleanFiltros();
        this.selectedCargo = cargo;
      },
    );
  }

  public filtrarPorGenero(genero: string): void {
    this.filtroService.filtrarPorGenero(genero).subscribe(
      (vagas) => {
        this.vagas = vagas;
        this.cleanFiltros();
        this.selectedGenero = genero;
      },
    );
  }

  public filtrarPorEtnia(etnia: string): void {
    this.filtroService.filtrarPorEtnia(etnia).subscribe(
      (vagas) => {
        this.vagas = vagas;
        this.cleanFiltros();
        this.selectedEtnia = etnia;
      },
    );
  }

  public filtrarPorArea(area: string): void {
    this.filtroService.filtrarPorAreaAtuacao(area).subscribe(
      (vagas) => {
        this.vagas = vagas;
        this.cleanFiltros();
        this.selectedArea = area;
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
