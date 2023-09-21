import { forkJoin } from 'rxjs';
import { VagaService } from './../../../utils/services/vaga/vaga.service';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';
import { Component, OnInit } from '@angular/core';
import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';

@Component({
  selector: 'app-view-vagas-inscritas',
  templateUrl: './view-vagas-inscritas.component.html',
  styleUrls: ['./view-vagas-inscritas.component.scss']
})
export class ViewVagasInscritasComponent implements OnInit {
  processos: ProcessoSeletivo[] = [];
  vagas: Vaga[] = [];
  constructor(
    private processoSeletivoService: ProcessoSeletivoService,
    private vagaService: VagaService,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    this.processoSeletivoService.obterProcessoSeletivosCandidatoId(this.local.UsuarioLogado.id)
      .subscribe((processos) => {
        this.processos = processos.filter(processo => processo.etapaId === 0);
        const observables = this.processos.map(processo =>
          this.vagaService.obterVagaPorId(processo.vagaId)
        );
        forkJoin(observables).subscribe(vagas => {
          this.vagas = vagas;
        });
      });
  }

}
