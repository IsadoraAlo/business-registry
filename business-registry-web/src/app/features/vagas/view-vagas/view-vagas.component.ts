import { VagaService } from 'src/app/utils/services/vaga/vaga.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';

@Component({
  selector: 'app-view-vagas',
  templateUrl: './view-vagas.component.html',
  styleUrls: ['./view-vagas.component.scss']
})
export class ViewVagasComponent implements OnInit {
  vaga: Vaga = new Vaga();

  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService
  ) { }

  ngOnInit(): void {
    this.vagaService.obterVagaPorId(this.route.snapshot.params['id']).subscribe(
      vaga => {
        this.vaga = vaga;
      });
  }
}
