import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasCadastrosComponent } from './empresas-cadastros/empresas-cadastros.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [EmpresasCadastrosComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [EmpresasCadastrosComponent],
})
export class EmpresasModule {}
