import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CandidatosCadastroComponent } from './candidatos-cadastro/candidatos-cadastro.component';
@NgModule({
  declarations: [CandidatosCadastroComponent],
  imports: [AppRoutingModule],
  exports: [CandidatosCadastroComponent]
})
export class CandidatosModule { }
