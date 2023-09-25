import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { VagasListComponent } from './list-vagas/vagas-list.component';
import { ViewEtapasComponent } from './view-etapas/view-etapas.component';
import { ModalOptionsComponent } from './view-vagas-inscritas/modal-options/modal-options.component';
import { ViewVagasInscritasComponent } from './view-vagas-inscritas/view-vagas-inscritas.component';
import { ViewVagasComponent } from './view-vagas/view-vagas.component';
import { ModalDescricaoComponent } from './view-etapas/modal-descricao/modal-descricao.component';
import { ViewEntrevistaComponent } from './view-etapas/view-entrevista/view-entrevista.component';
import { ViewQuestionarioComponent } from './view-etapas/view-questionario/view-questionario.component';
import { CandidatosInscritosListComponent } from './vagas-empresa/list-vagas-empresa/list-vagas-empresa.component';
import { CandidatosInscritosViewComponent } from './candidatos-inscritos/candidatos-inscritos-view/candidatos-inscritos-view.component';
import { VagasEmpresaViewComponent } from './vagas-empresa/vagas-empresa-view/vagas-empresa-view.component';

@NgModule({
  declarations: [
    ViewVagasComponent,
    VagasListComponent,
    ViewVagasInscritasComponent,
    ModalOptionsComponent,
    ViewEtapasComponent,
    ModalDescricaoComponent,
    ViewEntrevistaComponent,
    ViewQuestionarioComponent,
    CandidatosInscritosListComponent,
    CandidatosInscritosViewComponent,
    VagasEmpresaViewComponent,
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
    VagasListComponent,
    ViewEtapasComponent,
    ViewEntrevistaComponent,
    ViewQuestionarioComponent,
  ],
})
export class VagasModule { }
