import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { ViewVagasComponent } from './view-vagas/view-vagas.component';
import { VagasListComponent } from './list-vagas/vagas-list.component';

@NgModule({
  declarations: [
    ViewVagasComponent,
    VagasListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentesModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    ViewVagasComponent,
    VagasListComponent
  ],
})
export class VagasModule { }
