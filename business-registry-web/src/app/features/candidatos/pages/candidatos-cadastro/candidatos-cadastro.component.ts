import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/utils/services/usuario/usuario.service';

@Component({
  selector: 'app-candidatos-cadastro',
  templateUrl: './candidatos-cadastro.component.html',
  styleUrls: ['./candidatos-cadastro.component.scss']
})
export class CandidatosCadastroComponent {
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  saveUsuario() {
    this.usuario.tipo = 'CANDIDATO';
    this.usuario.status = true;
    this.usuarioService.criarUsuario(this.usuario).subscribe(usuario => {
      console.log(usuario);
      this.router.navigate(['/login']);
    },
      error => console.log(error));
  }

  onSubmit() {
    console.log(this.usuario);
    this.saveUsuario();
  }
}
