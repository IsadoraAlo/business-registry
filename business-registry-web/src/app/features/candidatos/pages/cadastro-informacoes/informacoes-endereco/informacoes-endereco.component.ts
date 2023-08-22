import { Component } from '@angular/core';
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
  public endereco: Endereco = new Endereco();
  public estados = estadosList;
  public cidades: any;

  constructor(
    private enderecoService: EnderecoService,
    private router: Router,
    private local:LocalStorage
  ) { }

  public getSelectedValue(estadoSelecionado: string): void {
    const estado = this.estados.find((estado) => estado.sigla === estadoSelecionado);
    this.cidades = estado?.cidades;
  }

  private saveEndereco(): void {
    this.endereco.pais = 'Brasil';
    this.endereco.usuario = this.local.UsuarioLogado;
    this.enderecoService.criarEndereco(this.endereco)
    .pipe(
      catchError((error) => {
        console.error('Erro ao criar endereço:', error);
        return throwError(() => error);
      })
    )
    .subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  public onSubmit(): void {
    this.saveEndereco();
  }
}
