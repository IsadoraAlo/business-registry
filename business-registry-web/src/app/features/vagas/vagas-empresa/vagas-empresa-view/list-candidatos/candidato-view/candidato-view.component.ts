import { ProcessoSeletivoService } from './../../../../../../utils/services/vaga/processo-seletivo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';
import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { CompetenciaService } from 'src/app/utils/services/usuario/candidato/competencia.service';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';

@Component({
  selector: 'app-candidato-view',
  templateUrl: './candidato-view.component.html',
  styleUrls: ['./candidato-view.component.scss']
})
export class CandidatoViewComponent implements OnInit {
  public competencias: Competencia[] = []
  public candidato: Candidato = new Candidato();
  public usuario: Usuario = new Usuario();
  public acao: string = '';
  public usuarioAtivo: Usuario = this.local.UsuarioLogado;
  public processo: ProcessoSeletivo = new ProcessoSeletivo();

  constructor(
    private processoSeletivoService: ProcessoSeletivoService,
    private competenciaService: CompetenciaService,
    private candidatoService: CandidatoService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    this.competenciaService.obterCompetenciasByCandidatoId(this.route.snapshot.params['id']).subscribe(competencias => this.competencias = competencias);
    this.candidatoService.obterCandidatoPorId(this.route.snapshot.params['id']).subscribe(candidato => this.candidato = candidato);
    this.usuarioService.obterUsuarioPorId(this.route.snapshot.params['id']).subscribe(usuario => this.usuario = usuario);
    this.processoSeletivoService.obterProcessoSeletivosCandidatoId(this.route.snapshot.params['id']).subscribe(
      (processos) => {
        let processoAchado;
        processoAchado = processos.find(processo => processo.vagaId == this.local.Vaga.id)
        if (processoAchado) {
          this.processo = processoAchado
        }
      }
    )
  }

  changeAcao(acao: string): void {
    this.acao = acao
  }
}
