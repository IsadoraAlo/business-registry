import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { EmpresasCadastrosComponent } from './empresas-cadastros/empresas-cadastros.component';
import { CadastroInformacoesEmpresaComponent } from './pages/cadastro-informacoes/cadastro-informacoes.component';
import { InformacoesEnderecoComponent } from './pages/cadastro-informacoes/informacoes-endereco/informacoes-endereco.component';
import { EtapaEntrevistaComponent } from './pages/nova-vaga/nova-etapa/etapa-entrevista/etapa-entrevista.component';
import { DissertativaComponent } from './pages/nova-vaga/nova-etapa/etapa-questionario/dissertativa/dissertativa.component';
import { EtapaQuestionarioComponent } from './pages/nova-vaga/nova-etapa/etapa-questionario/etapa-questionario.component';
import { MultiplaEscolhaComponent } from './pages/nova-vaga/nova-etapa/etapa-questionario/multipla-escolha/multipla-escolha.component';
import { NovaEtapaComponent } from './pages/nova-vaga/nova-etapa/nova-etapa.component';
import { NovaVagaComponent } from './pages/nova-vaga/nova-vaga.component';
@NgModule({
  declarations: [
    EmpresasCadastrosComponent,
    CadastroInformacoesEmpresaComponent,
    InformacoesEnderecoComponent,
    NovaVagaComponent,
    NovaEtapaComponent,
    EtapaEntrevistaComponent,
    EtapaQuestionarioComponent,
    MultiplaEscolhaComponent,
    DissertativaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentesModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forChild()
  ],
  exports: [EmpresasCadastrosComponent],
})
export class EmpresasModule { }
