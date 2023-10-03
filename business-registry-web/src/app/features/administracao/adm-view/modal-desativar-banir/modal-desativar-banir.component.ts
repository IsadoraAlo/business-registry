import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StatusGeral } from 'src/app/utils/models/usuario/StatusGeral.model';
import { StatusGeralService } from '../../../../utils/services/usuario/status-geral.service';

@Component({
  selector: 'modal-status-geral',
  templateUrl: './modal-desativar-banir.component.html',
  styleUrls: ['./modal-desativar-banir.component.scss']
})
export class ModalDesativarBanirComponent implements AfterViewInit {
  @Input() public idUsuario!: number;
  @Input() public acao!: string;

  public motivo: string = '';
  public showModal: boolean = false;
  public statusGeral: StatusGeral = new StatusGeral();

  constructor(private statusGeralService: StatusGeralService, private router: Router) { }
  ngAfterViewInit(): void {
    if (this.idUsuario > 0) {
      this.statusGeralService.obterStatusGeralPorId(this.idUsuario).subscribe(
        (statusGeral) => this.statusGeral = statusGeral
      );
    }
  }

  public exibirModal(acao?: 'banir' | 'desativar' | 'ativar'): void {
    if (acao) {
      this.acao = acao
    }
    this.showModal = !this.showModal
  }

  public onSubmit(): void {
    if (this.acao === 'banir') {
      this.statusGeral.isUsuarioBanido = true;
      this.statusGeral.motivo = this.motivo
      this.statusGeralService.atualizarStatusGeral(this.idUsuario, this.statusGeral).subscribe(() => { this.router.navigate(['administrativo', 'pagina-inicial']) });
    } else if (this.acao === 'desativar') {
      this.statusGeral.isUsuarioDesativado = true;
      this.statusGeral.motivo = this.motivo
      this.statusGeralService.atualizarStatusGeral(this.idUsuario, this.statusGeral).subscribe(() => { this.router.navigate(['administrativo', 'pagina-inicial']) });
    } else if (this.acao === 'ativar') {
      this.statusGeral.isUsuarioDesativado = false;
      this.statusGeral.motivo = this.motivo
      this.statusGeralService.atualizarStatusGeral(this.idUsuario, this.statusGeral).subscribe(() => { this.router.navigate(['administrativo', 'pagina-inicial']) });
    }
  }
}
