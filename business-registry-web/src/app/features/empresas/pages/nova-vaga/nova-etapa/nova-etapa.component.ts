import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { etapaTipoList } from 'src/app/utils/lists/etapa.utils';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { EtapaService } from './../../../../../utils/services/vaga/etapa.service';

@Component({
  selector: 'app-nova-etapa',
  templateUrl: './nova-etapa.component.html',
  styleUrls: ['./nova-etapa.component.scss']
})
export class NovaEtapaComponent {
  public vaga: Vaga = this.local.Vaga;
  public indexComponent: number = 0;
  public etapas: Etapa[] = []
  public tipos = etapaTipoList;

  public onClickAdd() {
    this.etapas.push(new Etapa());
    ++this.indexComponent
  }

  public onClickRemove() {
    if (this.etapas.length > 1) {
      this.etapas.pop();
      --this.indexComponent
    }
  }

  constructor(
    private etapaService: EtapaService,
    private local: LocalStorage,
    private router: Router,
  ) { }

  private saveEtapaByIndex(): void {
    const etapa = this.etapas[this.indexComponent-1];
    etapa.vagaId = this.vaga.id;
    etapa.numeracao = this.indexComponent;
      this.etapaService.criarEtapa(etapa)
        .pipe(
          catchError((error) => {
            console.error('Erro ao criar etapa:', error);
            return throwError(() => error);
          })
        )
        .subscribe();
  }

  public onSubmit(): void {
    this.saveEtapaByIndex();
  }
}
