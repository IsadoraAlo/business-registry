import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { MenuCandidatoComponent } from './componentes/menu-candidato/menu-candidato.component';
import { BoasVindasCandidatoComponent } from './pages/boas-vindas-candidato/boas-vindas-candidato.component';
import { InformacoesPessoaisComponent } from './pages/cadastro-informacoes/informacoes-pessoais/informacoes-pessoais.component';
import { CadastroInformacoesComponent } from './pages/cadastro-informacoes/cadastro-informacoes.component';
import { ExperienciasAnterioresComponent } from './pages/cadastro-informacoes/informacoes-profissionais/experiencias-anteriores/experiencias-anteriores.component';
import { InformacoesProfissionaisComponent } from './pages/cadastro-informacoes/informacoes-profissionais/informacoes-profissionais.component';
import { CandidatosBuscaVagasComponent } from './pages/candidatos-busca-vagas/candidatos-busca-vagas.component';
import { CandidatosCadastroComponent } from './pages/candidatos-cadastro/candidatos-cadastro.component';
import { InformacoesEnderecoComponent } from './pages/cadastro-informacoes/informacoes-endereco/informacoes-endereco.component';
@NgModule({
  declarations: [
    CandidatosCadastroComponent,
    MenuCandidatoComponent,
    BoasVindasCandidatoComponent,
    CandidatosBuscaVagasComponent,
    CadastroInformacoesComponent,
    InformacoesEnderecoComponent,
    InformacoesProfissionaisComponent,
    InformacoesPessoaisComponent,
    ExperienciasAnterioresComponent
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
  exports: [CandidatosCadastroComponent, BoasVindasCandidatoComponent],
})
export class CandidatosModule { }
