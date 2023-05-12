import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasCadastrosComponent } from './empresas-cadastros/empresas-cadastros.component';

@NgModule({
  declarations: [EmpresasCadastrosComponent],
  imports: [CommonModule],
  exports: [EmpresasCadastrosComponent],
})
export class EmpresasModule {}
