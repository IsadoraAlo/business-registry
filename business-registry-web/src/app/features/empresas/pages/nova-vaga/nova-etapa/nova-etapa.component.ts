import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';

@Component({
  selector: 'app-nova-etapa',
  templateUrl: './nova-etapa.component.html',
  styleUrls: ['./nova-etapa.component.scss']
})
export class NovaEtapaComponent {
  public vaga: Vaga = this.local.Vaga
  public etapas = this.vaga.etapas

  constructor(
    private vagaService: VagaService,
    private local: LocalStorage,
    private router: Router,
  ) { }

  public onSubmit(): void {}
}
