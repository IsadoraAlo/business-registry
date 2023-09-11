import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { etapaTipoList } from 'src/app/utils/lists/etapa.utils';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { EtapaService } from './../../../../../utils/services/vaga/etapa.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nova-etapa',
  templateUrl: './nova-etapa.component.html',
  styleUrls: ['./nova-etapa.component.scss']
})
export class NovaEtapaComponent {
  public isFormSubmitted: boolean = false;
  public vaga: Vaga = this.local.Vaga;
  public etapasNovas: boolean[] = [];
  public etapas: Etapa[] = [];
  public indexComponent: number = 0;
  public tipos = etapaTipoList;
  public idEtapa!: number;

  constructor(
    private etapaService: EtapaService,
    private local: LocalStorage,
    private router: Router,
  ) { }

  public onClickAdd(): void {
    this.etapas.push(new Etapa());
    ++this.indexComponent
    this.etapasNovas.push(true);
  }

  public onClickRemove(): void {
    if (this.etapas.length > 1) {
      this.etapas.pop();
      --this.indexComponent
      this.etapasNovas.pop();
    }
  }

  public onSubmit(): void {
    this.saveEtapaByIndex();
    this.verifyEtapaNova();
  }

  public finalizarVaga(): void {
    this.router.navigate(['empresas', 'pagina-inicial'])
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
      .subscribe((etapa) => this.idEtapa = etapa.id);
      this.isFormSubmitted = true
  }
}
