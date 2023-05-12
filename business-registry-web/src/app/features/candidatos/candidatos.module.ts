import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosCadastroComponent } from './candidatos-cadastro/candidatos-cadastro.component';



@NgModule({
  declarations: [CandidatosCadastroComponent],
  imports: [
    CommonModule
  ],
  exports: [CandidatosCadastroComponent]
})
export class CandidatosModule { }
