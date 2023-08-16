import { Component } from '@angular/core';

@Component({
  selector: 'app-informacoes-profissionais',
  templateUrl: './informacoes-profissionais.component.html',
  styleUrls: ['./informacoes-profissionais.component.scss']
})
export class InformacoesProfissionaisComponent {
  public indexComponent: number = 1;

  onClickAdd(){
    this.indexComponent = this.indexComponent+1;
  }

  onClickRemove(){
    this.indexComponent = this.indexComponent-1;
  }

  numSequence(number: number): Array<number> {
    return Array(this.indexComponent);
  }
}
