import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Endereco } from 'src/app/utils/models/usuario/endereco.model';
import { EnderecoService } from 'src/app/utils/services/usuario/endereco.service';
import { LocalStorage } from './../../../../../utils/data/local-storage.util';
import { estadosList } from 'src/app/utils/lists/estados.utils';

@Component({
  selector: 'app-informacoes-endereco',
  templateUrl: './informacoes-endereco.component.html',
  styleUrls: ['./informacoes-endereco.component.scss']
})
export class InformacoesEnderecoComponent{
  @Input() public endereco!: Endereco;
  public estados = estadosList;
  public cidades: any;

  public getSelectedValue(estadoSelecionado: string): void {
    const estado = this.estados.find((estado) => estado.sigla === estadoSelecionado);
    this.cidades = estado?.cidades;
  }
}
