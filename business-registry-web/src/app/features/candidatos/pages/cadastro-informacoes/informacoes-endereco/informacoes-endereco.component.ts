import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Endereco } from 'src/app/utils/models/usuario/endereco.model';
import { EnderecoService } from 'src/app/utils/services/usuario/endereco.service';
import { LocalStorage } from './../../../../../utils/data/local-storage.util';

@Component({
  selector: 'app-informacoes-endereco',
  templateUrl: './informacoes-endereco.component.html',
  styleUrls: ['./informacoes-endereco.component.scss']
})
export class InformacoesEnderecoComponent {

  endereco: Endereco = new Endereco();

  constructor(
    private enderecoService: EnderecoService,
    private router: Router,
    private local:LocalStorage
  ) { }

  saveEndereco(): void {
    this.endereco.pais = 'Brasil';
    this.endereco.usuarioId = this.local.UsuarioLogado.id;
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

  onSubmit(): void {
    this.saveEndereco();
  }
}
