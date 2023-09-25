import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';
import { VagaService } from './../../../../utils/services/vaga/vaga.service';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';

@Component({
  selector: 'app-candidatos-inscritos-list',
  templateUrl: './candidatos-inscritos-list.component.html',
  styleUrls: ['./candidatos-inscritos-list.component.scss']
})
export class CandidatosInscritosListComponent implements OnInit {
  vagas: Vaga[] = []
  constructor(
    private vagaService: VagaService,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    this.vagaService.obterVagaPorUsuario(this.local.UsuarioLogado.id).subscribe(
      (vagas) => {
        this.vagas = vagas
      })
  }
}
