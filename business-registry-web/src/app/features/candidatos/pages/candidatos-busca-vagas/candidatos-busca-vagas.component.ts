import { Component } from '@angular/core';

@Component({
  selector: 'app-candidatos-busca-vagas',
  templateUrl: './candidatos-busca-vagas.component.html',
  styleUrls: ['./candidatos-busca-vagas.component.scss']
})
export class CandidatosBuscaVagasComponent {

  public vagasDeficiente: boolean = false;

  public onClickVagasDeficiente(){
    this.vagasDeficiente = !this.vagasDeficiente;
  }
}
