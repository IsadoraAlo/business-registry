import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Entrevista } from 'src/app/utils/models/vaga/entrevista.model';
import { Etapa } from 'src/app/utils/models/vaga/etapa.model';
import { EntrevistaService } from './../../../../utils/services/vaga/entrevista.service';

@Component({
  selector: 'app-view-entrevista',
  templateUrl: './view-entrevista.component.html',
  styleUrls: ['./view-entrevista.component.scss']
})
export class ViewEntrevistaComponent implements OnInit {
  public etapa: Etapa = new Etapa();
  public entrevista: Entrevista = new Entrevista();
  public dataExtenso: string = '';

  constructor(
    private entrevistaService: EntrevistaService,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    this.entrevistaService.obterEntrevistaPorId(this?.local?.Etapa?.id).subscribe(
      (entrevista) => {
        this.entrevista = entrevista;
        this.etapa = this.local.Etapa;
        this.local.cleanStorage('Etapa');
        this.dataExtenso =  new Date(this.entrevista.data)?.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })
      }
    )
  }
}
