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
  public tipos = etapaTipoList;
  etapasNovas: boolean[] = [];
  public etapas: Etapa[] = [];
  public idEtapa!: number;

  constructor(
    private etapaService: EtapaService,
    private local: LocalStorage,
  ) { }

  public onClickAdd() {
    this.etapas.push(new Etapa());
    ++this.indexComponent
    this.etapasNovas.push(true);
  }

  public onClickRemove() {
    if (this.etapas.length > 1) {
      this.etapas.pop();
      --this.indexComponent
      this.etapasNovas.pop();
    }
  }

  private verifyEtapaNova(): boolean {
    const index = this.indexComponent - 1;
    this.etapasNovas[index] = false;
    return this.etapasNovas[index];
  }

  private saveEtapaByIndex(): void {
    const etapa = this.etapas[this.indexComponent - 1];
    etapa.vagaId = this.vaga.id;
    etapa.numeracao = this.indexComponent;
    this.etapaService.criarEtapa(etapa)
      .pipe(
        catchError((error) => {
          console.error('Erro ao criar etapa:', error);
          return throwError(() => error);
        })
      )
      .subscribe((etapa)=> this.idEtapa = etapa.id);
  }

  public onSubmit(): void {
    this.saveEtapaByIndex();
    this.verifyEtapaNova();
  }
}
