import { throwError, catchError } from 'rxjs';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from './../../../../../utils/services/usuario/usuario.service';
import { Component, Input } from '@angular/core';
import { LocalStorage } from 'src/app/utils/data/local-storage.util';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { CompetenciaService } from 'src/app/utils/services/usuario/candidato/competencia.service';
import { TipoCompetencia } from 'src/app/utils/enum/competencia.enum';

@Component({
  selector: 'app-informacoes-profissionais',
  templateUrl: './informacoes-profissionais.component.html',
  styleUrls: ['./informacoes-profissionais.component.scss']
})
export class InformacoesProfissionaisComponent {
  public indexComponent: number = 1;
  @Input() public usuario!: Usuario;
  @Input() public competencias!: Competencia[];

  onClickAdd() {
    this.competencias.push(new Competencia());
  }

  onClickRemove() {
    if (this.competencias.length > 1) {
      this.competencias.pop();
    }
  }
}
