import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { VagaService } from '../../../../utils/services/vaga/vaga.service';

@Component({
  selector: 'app-candidatos-inscritos-list',
  templateUrl: './list-vagas-empresa.component.html',
  styleUrls: ['./list-vagas-empresa.component.scss']
})
export class CandidatosInscritosListComponent implements OnInit {
  vagas: Vaga[] = []
  constructor(
    private vagaService: VagaService,
    private local: LocalStorage,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vagaService.obterVagaPorUsuario(this.local.UsuarioLogado.id).subscribe(
      (vagas) => {
        this.vagas = vagas
      })
  }

  public vagaDetails(id: number): void {
    this.router.navigate(['vagas', 'candidatos', id]);
  }
}
