import { Component, Input } from '@angular/core';
import { Competencia } from 'src/app/utils/models/usuario/candidato/competencia.model';
import { Usuario } from 'src/app/utils/models/usuario/usuario.model';

@Component({
  selector: 'app-informacoes-profissionais',
  templateUrl: './informacoes-profissionais.component.html',
})
export class InformacoesProfissionaisComponent {
  public indexComponent: number = 0;
  @Input() public usuario!: Usuario;
  @Input() public competencias!: Competencia[];

  onClickAdd() {
    this.competencias.push(new Competencia());
    ++this.indexComponent
  }

  onClickRemove() {
    if (this.competencias.length > 1) {
      this.competencias.pop();
      --this.indexComponent
    }
  }
}
