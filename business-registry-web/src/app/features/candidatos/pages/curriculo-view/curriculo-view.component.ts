import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { CompetenciaService } from 'src/app/utils/services/usuario/candidato/competencia.service';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';

@Component({
  selector: 'app-curriculo-view',
  templateUrl: './curriculo-view.component.html',
  styleUrls: ['./curriculo-view.component.scss']
})
export class CurriculoViewComponent implements OnInit {
  public usuario: Usuario = this.local.UsuarioLogado
  public candidato: Candidato = new Candidato();
  public competencias: Competencia[] = [];

  constructor(
    private candidatoService: CandidatoService,
    private competenciaService: CompetenciaService,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    this.candidatoService.obterCandidatoPorId(this.usuario.id).subscribe(data => this.candidato = data);
    this.competenciaService.obterCompetenciasByCandidatoId(this.usuario.id).subscribe(competencias => this.competencias = competencias)
  }
}
