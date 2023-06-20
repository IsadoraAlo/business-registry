import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosCadastroComponent } from './candidatos-cadastro/candidatos-cadastro.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [CandidatosCadastroComponent],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [CandidatosCadastroComponent]
})
export class CandidatosModule { }
