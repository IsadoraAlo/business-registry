import { Endereco } from './../../../../utils/models/usuario/endereco.model';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { CompetenciaService } from 'src/app/utils/services/usuario/candidato/competencia.service';
import { EnderecoService } from 'src/app/utils/services/usuario/endereco.service';

@Component({
  selector: 'app-view-usuario',
  templateUrl: './view-usuario.component.html',
})
export class ViewUsuarioComponent implements OnInit, AfterViewInit {
  public candidato: Candidato = new Candidato();
  public competencias: Competencia[] = [];
  public enderecos: Endereco[] = [];
  public usuario: Usuario = new Usuario();

  constructor(
    private candidatoService: CandidatoService,
    private competenciaService: CompetenciaService,
    private enderecoService: EnderecoService,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    this.usuario = this.local.UsuarioLogado;
  }

  ngAfterViewInit(): void {
    this.candidatoService.obterCandidatoPorId(this.usuario.id).subscribe(data => this.candidato = data);
    this.competenciaService.obterCompetenciasByCandidatoId(this.usuario.id).subscribe(competencias => this.competencias = competencias);
    this.enderecoService.obterEnderecosByUsuarioId(this.usuario.id).subscribe(enderecos => this.enderecos = enderecos);
  }

}
