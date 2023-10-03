import { AfterViewInit, Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { StatusGeral } from 'src/app/utils/models/usuario/StatusGeral.model';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { StatusGeralService } from 'src/app/utils/services/usuario/status-geral.service';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements AfterViewInit{
  public status: StatusGeral = new StatusGeral();
  processos: ProcessoSeletivo[] = [];
  vagas: Vaga[] = [];

  constructor(
    private local: LocalStorage,
    private processoSeletivoService: ProcessoSeletivoService,
    private statusGeralService: StatusGeralService,
    private vagaService: VagaService
    ) { }

  public isMenuSelected: boolean = false;
  public usuario: Usuario = this.local.UsuarioLogado;

  public onClickMenu(): void {
    this.isMenuSelected = !this.isMenuSelected;
  }

  public onClickLogout(): void {
    this.local.cleanAllStorage();
  }

  ngAfterViewInit(): void {
    this.statusGeralService.obterStatusGeralPorId(this.local.UsuarioLogado.id).subscribe((status)=>{
      this.status = status;
    })
  }

  ngOnInit(): void {
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
  }
}
