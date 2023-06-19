import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosComponent } from './cadastros.component';
import { FormsModule } from '@angular/forms';
import { EmpresasModule } from 'src/app/features/empresas/empresas.module';
import { CandidatosModule } from 'src/app/features/candidatos/candidatos.module';

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
