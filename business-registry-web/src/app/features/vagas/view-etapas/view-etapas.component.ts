import { ProcessoSeletivoService } from './../../../utils/services/vaga/processo-seletivo.service';
import { EtapaService } from './../../../utils/services/vaga/etapa.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';

@Component({
  selector: 'app-view-etapas',
  templateUrl: './view-etapas.component.html',
  styleUrls: ['./view-etapas.component.scss']
})
export class ViewEtapasComponent {
  etapas: Etapa[] = [];
  processoAtivo: ProcessoSeletivo = new ProcessoSeletivo();

  constructor(
    private etapaService: EtapaService,
    private processoSeletivoService: ProcessoSeletivoService,
    private route: ActivatedRoute,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    this.etapaService.obterEtapasVagaId(this.route.snapshot.params['id']).subscribe(
      etapas => {
        this.etapas = etapas;
      }
    );

    this.processoSeletivoService.obterProcessoSeletivosCandidatoId(this.local.UsuarioLogado.id).subscribe(
      (processos) => {
        const processoEncontrado = processos?.find(processo => processo.vagaId === this.route.snapshot.params['id']);
        if (processoEncontrado) {
          this.processoAtivo = processoEncontrado;
        }
      }
    );
  }
}
