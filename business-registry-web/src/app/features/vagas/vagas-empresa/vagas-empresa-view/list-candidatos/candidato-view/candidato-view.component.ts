import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { Component, Input, AfterViewInit } from '@angular/core';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { CompetenciaService } from 'src/app/utils/services/usuario/candidato/competencia.service';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';

@Component({
  selector: 'app-candidato-view',
  templateUrl: './candidato-view.component.html',
  styleUrls: ['./candidato-view.component.scss']
})
export class CandidatoViewComponent implements AfterViewInit {
  public competencias: Competencia[] = []
  public candidato: Candidato = new Candidato();
  public usuario: Usuario = new Usuario();
  public acao: string = '';
  public processo: ProcessoSeletivo = new ProcessoSeletivo;

  constructor(
    private competenciaService: CompetenciaService,
    private candidatoService: CandidatoService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private local: LocalStorage
  ) { }

  ngAfterViewInit(): void {
    this.competenciaService.obterCompetenciasByCandidatoId(this.route.snapshot.params['id']).subscribe(competencias => this.competencias = competencias);
    this.candidatoService.obterCandidatoPorId(this.route.snapshot.params['id']).subscribe(candidato => this.candidato = candidato);
    this.usuarioService.obterUsuarioPorId(this.route.snapshot.params['id']).subscribe(usuario => this.usuario = usuario);
    if (this.local.Processo.id > 0) {
      this.processo = this.local.Processo;
    }
  }

  changeAcao(acao: string): void {
    this.acao = acao
  }
}
