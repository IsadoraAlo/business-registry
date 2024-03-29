import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { areaAtuacaoList } from 'src/app/utils/lists/area-atuacao.utils';
import { cargosList } from 'src/app/utils/lists/cargos.utils';
import { deficienciaList } from 'src/app/utils/lists/deficiencia.utils';
import { etniaList } from 'src/app/utils/lists/etnia.utils';
import { generoList } from 'src/app/utils/lists/genero.utils';
import { modalidadeList } from 'src/app/utils/lists/modalidade.utils';
import { StatusVaga } from 'src/app/utils/models/vaga/status-vaga.model';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { StatusVagaService } from 'src/app/utils/services/vaga/status-vaga.service';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';
import { FiltroService } from './../../../utils/services/vaga/filtro-vaga.service';
import { ProcessoSeletivoService } from './../../../utils/services/vaga/processo-seletivo.service';

@Component({
  selector: 'vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.scss']
})
export class VagasListComponent implements OnInit {
  public vagasDeficiente: boolean = false;
  public vagas: Vaga[] = [];
  public statusVagas: StatusVaga[] = [];
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
    private statusVagaService: StatusVagaService,
    private vagaService: VagaService,
    private router: Router,
    private local: LocalStorage,
    private processoSeletivoService: ProcessoSeletivoService,
    private filtroService: FiltroService
  ) { }

  ngOnInit(): void {
    this.vagaService.obterVagas().subscribe((vagas) => {
      this.vagas = vagas;
      for (const vaga of vagas) {
        this.statusVagaService.obterStatusVagaPorId(vaga.id).subscribe(
          (statusVaga) => {
            this.statusVagas.push(statusVaga);
            if (vagas.length === this.statusVagas.length) {
              this.listarVagasAtivas();
              this.listarVagasNaoInscritas();
            }
          }
        )
      }
    });
  }

  private listarVagasNaoInscritas(): void {
    let vagasInscritas: Vaga[] = [];
    this.processoSeletivoService.obterProcessoSeletivosCandidatoId(this.local.UsuarioLogado.id).subscribe(
      (processos) => {
        for (const processo of processos) {
          this.vagaService.obterVagaPorId(processo.vagaId).subscribe((vaga) => {
            vagasInscritas.push(vaga);
          })
        }
      }
    );
    this.vagas = this.vagas.filter((vaga) => !vagasInscritas.includes(vaga));
  }

  private listarVagasAtivas(): void {
    let vagasAtivas: Vaga[] = [];
    for (const statusVaga of this.statusVagas) {
      if (!statusVaga.isVagaInativa) {
        this.vagaService.obterVagaPorId(statusVaga.id).subscribe((vaga) => {
          vagasAtivas.push(vaga)
        })
      }
    }
    this.vagas = vagasAtivas;
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
