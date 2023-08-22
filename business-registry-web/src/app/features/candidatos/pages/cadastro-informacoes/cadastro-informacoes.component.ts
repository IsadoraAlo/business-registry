import { Component } from '@angular/core';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { Endereco } from 'src/app/utils/models/usuario/endereco.model';

@Component({
  selector: 'app-cadastro-informacoes',
  templateUrl: './cadastro-informacoes.component.html',
  styleUrls: ['./cadastro-informacoes.component.scss']
})
export class CadastroInformacoesComponent {
  public endereco: Endereco = new Endereco();
  public candidato: Candidato = new Candidato();
  public onSubmit(): void {

  }
}
