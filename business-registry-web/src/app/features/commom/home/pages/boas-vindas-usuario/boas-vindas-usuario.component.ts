import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { TipoUsuario } from 'src/app/utils/enum/candidato.enum';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';

@Component({
  selector: 'app-boas-vindas-usuario',
  templateUrl: './boas-vindas-usuario.component.html',
  styleUrls: ['./boas-vindas-usuario.component.scss']
})
export class BoasVindasUsuarioComponent implements OnInit {
  public usuario: Usuario = this.local?.UsuarioLogado;
  public isPrimeiroAcesso: boolean = false;
  processos: ProcessoSeletivo[] = [];
  vagasTotais: Vaga[] = [];
  usuarios: Usuario[] = [];
  vagas: Vaga[] = [];

  constructor(
    private local: LocalStorage,
    private processoSeletivoService: ProcessoSeletivoService,
    private vagaService: VagaService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.usuarioService.obterUsuarios().subscribe(usuarios => this.usuarios = usuarios)
    this.vagaService.obterVagas().subscribe(vagas => this.vagasTotais = vagas);
    this.processoSeletivoService.obterProcessoSeletivosCandidatoId(this.local.UsuarioLogado.id)
      .subscribe((processos) => {
        this.processos = processos;
        const observables = this.processos.map(processo =>
          this.vagaService.obterVagaPorId(processo.vagaId)
        );
        forkJoin(observables).subscribe(vagas => {
          this.vagas = vagas;
        });
      });
    if (this.usuario.sobre === '') {
      this.isPrimeiroAcesso = true;
    }
  }

  public empresasTotais(): number{
    return this.usuarios.filter((usuario) => usuario.tipo === TipoUsuario.EMPRESA).length
  }

  public candidatosTotais(): number{
    return this.usuarios.filter((usuario) => usuario.tipo === TipoUsuario.CANDIDATO).length
  }
}
