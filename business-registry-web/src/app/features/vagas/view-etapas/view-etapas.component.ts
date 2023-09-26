import { ProcessoSeletivoService } from './../../../utils/services/vaga/processo-seletivo.service';
import { EtapaService } from './../../../utils/services/vaga/etapa.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';

@Component({
  selector: 'app-view-etapas',
  templateUrl: './view-etapas.component.html',
  styleUrls: ['./view-etapas.component.scss']
})
export class ViewEtapasComponent  implements OnInit, AfterViewInit{
  etapas: Etapa[] = [];
  processoAtivo: ProcessoSeletivo = new ProcessoSeletivo();

  constructor(
    private etapaService: EtapaService,
    private processoSeletivoService: ProcessoSeletivoService,
    private route: ActivatedRoute,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    const vagaId: number = this.route.snapshot.params['id'];
    this.etapaService.obterEtapasVagaId(vagaId).subscribe(
      etapas => {
        this.etapas = etapas;
      }
    );
  }

  ngAfterViewInit(): void {
    const vagaId: number = this.route.snapshot.params['id'];
    this.processoSeletivoService?.obterProcessoSeletivosCandidatoId(this.local?.UsuarioLogado?.id).subscribe(
      (processosInscritos) => {
        if (processosInscritos.length === 1) {
          this.processoAtivo = processosInscritos[0];
        } else {
          for (let i = 0; i < processosInscritos.length; i++) {
            if (processosInscritos[i]?.vagaId == vagaId) {
              this.processoAtivo = processosInscritos[i];
              break;
            }
          }
        }
      }
    );
  }

}
