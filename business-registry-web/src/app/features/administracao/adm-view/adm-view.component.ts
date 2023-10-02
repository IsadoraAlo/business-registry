import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { EnderecoService } from 'src/app/utils/services/usuario/endereco.service';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { Endereco } from 'src/app/utils/models/usuario/endereco.model';

@Component({
  selector: 'app-adm-view',
  templateUrl: './adm-view.component.html',
  styleUrls: ['./adm-view.component.scss']
})
export class AdmViewComponent implements OnInit {
  public candidato: Candidato = new Candidato();
  public usuario: Usuario = new Usuario();
  public competencias: Competencia[] = [];
  public enderecos: Endereco[] = [];

  constructor(
    private candidatoService: CandidatoService,
    private enderecoService: EnderecoService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.candidatoService.obterCandidatoPorId(this.route.snapshot.params['id']).subscribe(data => this.candidato = data);
    this.usuarioService.obterUsuarioPorId(this.route.snapshot.params['id']).subscribe((usuario) => this.usuario = usuario);
    this.enderecoService.obterEnderecosByUsuarioId(this.route.snapshot.params['id']).subscribe(enderecos => this.enderecos = enderecos);
  }
}
