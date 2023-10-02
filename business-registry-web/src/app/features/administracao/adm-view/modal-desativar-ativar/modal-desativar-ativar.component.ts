import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';

@Component({
  selector: 'modal-desativar-ativar',
  templateUrl: './modal-desativar-ativar.component.html',
  styleUrls: ['./modal-desativar-ativar.component.scss']
})
export class ModalDesativarAtivarComponent implements AfterViewInit{
  public showModal: boolean = false;
  public usuario: Usuario = new Usuario();
  @Input() public idUsuario!: number;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngAfterViewInit(): void {
    this.usuarioService.obterUsuarioPorId(this.idUsuario).subscribe(usuario => this.usuario = usuario);
  }

  public exibirModal(): void {
    this.showModal = !this.showModal
  }

  public onSubmit(): void {
    if (this.usuario.id > 0) {
      this.usuario.status = !this.usuario.status;
      this.usuarioService.atualizarUsuario(this.idUsuario, this.usuario).subscribe(
        () => {
          this.router.navigate(['administrativo', 'pagina-inicial']);
        }
      );
    }
  }
}
