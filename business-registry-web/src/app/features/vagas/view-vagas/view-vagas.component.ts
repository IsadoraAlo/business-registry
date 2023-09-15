import { CandidatoService } from 'src/app/utils/services/usuario/candidato/candidato.service';
import { VagaService } from 'src/app/utils/services/vaga/vaga.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaga } from 'src/app/utils/models/vaga/vaga.model';
import { Candidato } from 'src/app/utils/models/usuario/candidato/candidato.model';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-view-vagas',
  templateUrl: './view-vagas.component.html',
  styleUrls: ['./view-vagas.component.scss']
})
export class ViewVagasComponent implements OnInit {
  vaga: Vaga = new Vaga();
  candidato: Candidato = new Candidato();

  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService,
    private candidatoService: CandidatoService,
    private local: LocalStorage
  ) { }

  ngOnInit(): void {
    this.vagaService.obterVagaPorId(this.route.snapshot.params['id']).subscribe(
      vaga => this.vaga = vaga
    );
    this.candidatoService.obterCandidatoPorId(this.local.UsuarioLogado.id).subscribe(
      candidato => this.candidato = candidato
    )
  }

  public inscreverCandidato(): void {
    const candidatoInscrito = this.vaga.candidatos.some(c => c.id === this.candidato.id);
    if (!candidatoInscrito) {
      this.vaga.candidatos.push(this.candidato);
      this.vagaService.atualizarVaga(this.vaga.id, this.vaga).pipe(
        catchError((error) => {
          console.error('Erro ao inscrever o candidato na vaga', error);
          return throwError(() => error);
        })
      ).subscribe(
        () => {
          console.log('Candidato inscrito com sucesso na vaga.');
        }
      );
    } else {
      console.warn('O candidato já está inscrito nesta vaga.');
    }
  }
}
