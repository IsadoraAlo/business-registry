import { VagaService } from './../../../../../utils/services/vaga/vaga.service';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';

@Component({
  selector: 'list-candidatos',
  templateUrl: './list-candidatos.component.html',
  styleUrls: ['./list-candidatos.component.scss']
})
export class ListCandidatosComponent implements AfterViewInit {
  @Input() public vagaId!: number;
  public candidatosInscritos: { usuario: Usuario, candidato: Candidato }[] = []
  constructor(
    private processoSeletivoService: ProcessoSeletivoService,
    private candidatoService: CandidatoService,
    private usuarioService: UsuarioService,
    private vagaService: VagaService,
    private router: Router,
    private local: LocalStorage
  ) { }

  ngAfterViewInit(): void {
    this.processoSeletivoService.obterProcessosSeletivosVagaId(this.vagaId).subscribe(
      (processos) => {
        for (const processo of processos) {
          this.candidatoService.obterCandidatoPorId(processo.candidatoId).subscribe(
            (candidato) => {
              this.usuarioService.obterUsuarioPorId(candidato.id).subscribe(
                (usuario) => this.candidatosInscritos.push({ usuario, candidato })
              )
            }
          )
        }
      })
    this.vagaService.obterVagaPorId(this.vagaId).subscribe((vaga) => this.local.setVaga(vaga))
  }

  public viewCandidato(id?: number): void {
    this.processoSeletivoService.obterProcessosSeletivosVagaId(this.vagaId).subscribe(
      (processos) => {
        let processo = processos?.find(processo => processo?.candidatoId === id)
        this.local?.setProcesso(processo)
      })
    this.router.navigate(['candidatos', id])
  }
}
