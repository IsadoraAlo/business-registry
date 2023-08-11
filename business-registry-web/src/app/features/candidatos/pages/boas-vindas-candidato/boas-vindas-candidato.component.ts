import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';

@Component({
  selector: 'app-boas-vindas-candidato',
  templateUrl: './boas-vindas-candidato.component.html',
  styleUrls: ['./boas-vindas-candidato.component.scss']
})
export class BoasVindasCandidatoComponent implements OnInit {
  public nomeCandidato: string = 'Jorge Almeida';
  numeroVagas= '5'
  constructor(private localStorage: LocalStorage) { }

  ngOnInit() {
    this.localStorage?.getUsuarioLogado()
  }

}
