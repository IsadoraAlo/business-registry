import { StatusVaga } from './../../../../utils/models/vaga/status-vaga.model';
import { StatusVagaService } from './../../../../utils/services/vaga/status-vaga.service';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { VagaService } from '../../../../utils/services/vaga/vaga.service';
import { TipoUsuario } from 'src/app/utils/enum/candidato.enum';

@Component({
  selector: 'app-candidatos-inscritos-list',
  templateUrl: './list-vagas-empresa.component.html',
  styleUrls: ['./list-vagas-empresa.component.scss']
})
export class CandidatosInscritosListComponent implements OnInit {
  public usuario: Usuario = this.local.UsuarioLogado;
  public vagas: Vaga[] = [];
  public statusVagas: StatusVaga[] = [];

  constructor(
    private statusVagaService: StatusVagaService,
    private vagaService: VagaService,
    private local: LocalStorage,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.local.UsuarioLogado.tipo === TipoUsuario.EMPRESA) {
      this.vagaService.obterVagaPorUsuario(this.local.UsuarioLogado.id).subscribe(
        (vagas) => {
          this.vagas = vagas;
          for (const vaga of vagas) {
            this.statusVagaService.obterStatusVagaPorId(vaga.id).subscribe(
              (statusVaga) => {
                this.statusVagas.push(statusVaga)
              }
            )
          }
        })
    } else if (this.local.UsuarioLogado.tipo === TipoUsuario.ADMIN) {
      this.vagaService.obterVagaPorUsuario(this.route.snapshot.params['id']).subscribe(
        (vagas) => {
          this.vagas = vagas
          for (const vaga of vagas) {
            this.statusVagaService.obterStatusVagaPorId(vaga.id).subscribe(
              (statusVaga) => {
                this.statusVagas.push(statusVaga);
              }
            )
          }
        })
    }
  }

  public vagaDetails(id: number): void {
    this.router.navigate(['vagas', 'candidatos', id]);
  }
}
