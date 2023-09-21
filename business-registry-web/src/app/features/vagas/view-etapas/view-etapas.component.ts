import { EtapaService } from './../../../utils/services/vaga/etapa.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';

@Component({
  selector: 'app-view-etapas',
  templateUrl: './view-etapas.component.html',
  styleUrls: ['./view-etapas.component.scss']
})
export class ViewEtapasComponent {
  etapas: Etapa[] = [];

  constructor(
    private etapaService: EtapaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.etapaService.obterEtapasVagaId(this.route.snapshot.params['id']).subscribe(
      etapas => this.etapas = etapas
    );
  }
}
