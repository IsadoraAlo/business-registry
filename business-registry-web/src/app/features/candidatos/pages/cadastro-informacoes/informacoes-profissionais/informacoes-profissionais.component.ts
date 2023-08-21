import { throwError, catchError } from 'rxjs';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from './../../../../../utils/services/usuario/usuario.service';
import { Component } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informacoes-profissionais',
  templateUrl: './informacoes-profissionais.component.html',
  styleUrls: ['./informacoes-profissionais.component.scss']
})
export class InformacoesProfissionaisComponent {
  public usuario: Usuario = this.local.UsuarioLogado;
  public indexComponent: number = 1;
  public competenciaForm: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private local:LocalStorage,
    private formBuilder: FormBuilder,
  ) {
    this.competenciaForm = this.formBuilder.group({
      titulo: [''],
      instituicao: [''],
      dataInicio: [null],
      dataTermino: [null]
    })
  }

  onClickAdd(){
    this.indexComponent = this.indexComponent+1;
    console.log(this.competenciaForm.value)
  }

  onClickRemove(){
    this.indexComponent = this.indexComponent-1;
  }

  numSequence(number: number): Array<number> {
    return Array(this.indexComponent);
  }

  private saveUsuario(): void {
    this.usuarioService.atualizarUsuario(this.usuario.id, this.usuario)
    .pipe(
      catchError((error) => {
        console.error('Erro ao criar usuário:', error);
        return throwError(() => error);
      })
    )
    .subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  public onSubmit(): void {
    this.saveUsuario();
  }
}
