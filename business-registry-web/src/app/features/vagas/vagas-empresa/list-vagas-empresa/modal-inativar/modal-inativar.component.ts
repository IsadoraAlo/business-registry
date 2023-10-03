import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { StatusVaga } from 'src/app/utils/models/vaga/status-vaga.model';
import { StatusVagaService } from './../../../../../utils/services/vaga/status-vaga.service';

@Component({
  selector: 'modal-inativar',
  templateUrl: './modal-inativar.component.html',
  styleUrls: ['./modal-inativar.component.scss']
})
export class ModalInativarComponent implements AfterViewInit {
  @Input() public vagaId!: number;
  public showModal: boolean = false;
  public usuario: Usuario = this.local.UsuarioLogado;
  public statusVaga: StatusVaga = new StatusVaga();

  public exibirModal(): void {
    this.showModal = !this.showModal
  }

  constructor(
    private router: Router,
    private local: LocalStorage,
    private statusVagaService: StatusVagaService
  ) { }

  ngAfterViewInit(): void {
    this.statusVagaService.obterStatusVagaPorId(this.vagaId).subscribe(
      (status) => { this.statusVaga = status; }
    )
  }

  public onSubmit() {
    this.statusVaga.isVagaInativa = !this.statusVaga.isVagaInativa
    this.statusVagaService.atualizarStatusVaga(this.vagaId, this.statusVaga).subscribe(() => {
      if (this.usuario.tipo === 'EMPRESA') {
        this.router.navigate(['empresas', 'pagina-inicial'])
      } else if (this.usuario.tipo === 'ADMIN') {
        this.router.navigate(['administrativo', 'pagina-inicial'])
      }
    });
  }
}
