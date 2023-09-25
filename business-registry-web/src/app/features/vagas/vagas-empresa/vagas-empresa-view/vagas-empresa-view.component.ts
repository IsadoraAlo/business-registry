import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';

@Component({
  selector: 'app-vagas-empresa-view',
  templateUrl: './vagas-empresa-view.component.html',
  styleUrls: ['./vagas-empresa-view.component.scss']
})
export class VagasEmpresaViewComponent {
  vaga: Vaga = new Vaga();

  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService,
  ) { }

  ngOnInit(): void {
    this.vagaService.obterVagaPorId(this.route.snapshot.params['id']).subscribe(
      vaga => this.vaga = vaga
    );
  }

}
