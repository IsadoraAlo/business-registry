import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EmpresasCadastrosComponent } from './empresas-cadastros/empresas-cadastros.component';
@NgModule({
  declarations: [EmpresasCadastrosComponent],
  imports: [AppRoutingModule],
  exports: [EmpresasCadastrosComponent],
})
export class EmpresasModule {}
