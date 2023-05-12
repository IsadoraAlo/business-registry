import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasModule } from '../../empresas/empresas.module';
import { CandidatosModule } from '../../candidatos/candidatos.module';
import { CadastrosComponent } from './cadastros.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastrosComponent],
  imports: [
    CommonModule,
    FormsModule,
    EmpresasModule,
    CandidatosModule
  ],
  exports: [CadastrosComponent]
})
export class CadastrosModule { }
