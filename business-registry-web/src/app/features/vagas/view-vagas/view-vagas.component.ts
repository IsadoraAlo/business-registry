import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { catchError, throwError } from 'rxjs';
import { ProcessoSeletivoService } from 'src/app/utils/services/vaga/processo-seletivo.service';
import { ProcessoSeletivo } from 'src/app/utils/models/vaga/processo-seletivo.model';

@Component({
  selector: 'app-view-vagas',
  templateUrl: './view-vagas.component.html',
  styleUrls: ['./view-vagas.component.scss']
})
export class ViewVagasComponent implements OnInit {
  vaga: Vaga = new Vaga();
  candidato: Candidato = new Candidato();
  processo: ProcessoSeletivo = new ProcessoSeletivo();

  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService,
    private processoSeletivoService: ProcessoSeletivoService,
    private candidatoService: CandidatoService,
    private local: LocalStorage,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vagaService.obterVagaPorId(this.route.snapshot.params['id']).subscribe(
      vaga => this.vaga = vaga
    );
    this.candidatoService.obterCandidatoPorId(this.local.UsuarioLogado.id).subscribe(
      candidato => this.candidato = candidato
    )
    this.processoSeletivoService.obterProcessosSeletivosVagaId(this.route.snapshot.params['id']).subscribe(
      processos => {
        let processoRealizado = processos.find(processo => processo.candidatoId == this.local.UsuarioLogado.id)
        if (processoRealizado) {
          this.processo = processoRealizado;
        }
      }
    );
  }

  public inscreverCandidato(): void {
    if (this.processo.id == 0) {
      this.processo.candidatoId = this.candidato.id;
      this.processo.candidatoAprovado = false;
      this.processo.pontuacaoCandidato = 0;
      this.processo.vagaId = this.vaga.id;
      this.processo.etapaId = 0;
      this.processoSeletivoService.criarProcessoSeletivo(this.processo)
        .pipe(
          catchError((error) => {
            console.error('Erro ao criar usuário:', error);
            return throwError(() => error);
          })
        )
        .subscribe(() => {
          this.router.navigate(['/vagas/inscritas']);
        });
    } else {
      this.router.navigate(['/vagas/inscritas']);
    }
  }
}
