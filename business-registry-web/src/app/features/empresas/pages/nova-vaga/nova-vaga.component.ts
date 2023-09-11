import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { areaAtuacaoList } from 'src/app/utils/lists/area-atuacao.utils';
import { cargosList } from 'src/app/utils/lists/cargos.utils';
import { deficienciaList } from 'src/app/utils/lists/deficiencia.utils';
import { modalidadeList } from 'src/app/utils/lists/modalidade.utils';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';

@Component({
  selector: 'app-nova-vaga',
  templateUrl: './nova-vaga.component.html',
  styleUrls: ['./nova-vaga.component.scss']
})
export class NovaVagaComponent {
  public deficiencia = deficienciaList;
  public modalidades = modalidadeList;
  public areas = areaAtuacaoList;
  public cargos = cargosList;
  public vaga: Vaga = new Vaga();

  constructor(
    private vagaService: VagaService,
    private local: LocalStorage,
    private router: Router,
  ) { }

  public onClickVagasDeficiente(): void {
    this.vaga.vagaPcd = !this.vaga.vagaPcd;
  }

  public onSubmit(): void {
    this.saveVaga();
  }

  private saveVaga(): void {
    if (this.vaga.vagaPcd === false) { this.vaga.deficiencia = '' }
    this.vaga.usuario = this.local.UsuarioLogado;
    this.vagaService.criarVaga(this.vaga).pipe(
      catchError((error) => {
        console.error('Erro ao criar vaga:', error);
        return throwError(() => error);
      })
    ).subscribe((vaga) => {
      this.local.setVaga(vaga)
      this.router.navigate(['empresas', 'etapas'])
    });
  }
}
