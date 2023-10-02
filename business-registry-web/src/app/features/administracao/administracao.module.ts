import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { AdmCandidatoListComponent } from './adm-candidato-list/adm-candidato-list.component';
import { AdmEmpresaListComponent } from './adm-empresa-list/adm-empresa-list.component';
import { AdmViewComponent } from './adm-view/adm-view.component';
@NgModule({
  declarations: [
    AdmCandidatoListComponent,
    AdmEmpresaListComponent,
    AdmViewComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forChild(),
  ],
})
export class AdministracaoModule { }
