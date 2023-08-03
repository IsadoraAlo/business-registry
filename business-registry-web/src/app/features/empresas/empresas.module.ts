import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EmpresasCadastrosComponent } from './empresas-cadastros/empresas-cadastros.component';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [EmpresasCadastrosComponent],
  imports: [AppRoutingModule, ComponentesModule, FormsModule, HttpClientModule, NgxMaskModule.forChild()],
  exports: [EmpresasCadastrosComponent],
})
export class EmpresasModule {}
