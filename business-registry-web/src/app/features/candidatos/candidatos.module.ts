import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { CadastroInformacoesComponent } from './pages/cadastro-informacoes/cadastro-informacoes.component';
import { InformacoesEnderecoComponent } from './pages/cadastro-informacoes/informacoes-endereco/informacoes-endereco.component';
import { InformacoesPessoaisComponent } from './pages/cadastro-informacoes/informacoes-pessoais/informacoes-pessoais.component';
import { ExperienciasAnterioresComponent } from './pages/cadastro-informacoes/informacoes-profissionais/experiencias-anteriores/experiencias-anteriores.component';
import { InformacoesProfissionaisComponent } from './pages/cadastro-informacoes/informacoes-profissionais/informacoes-profissionais.component';
import { CandidatosCadastroComponent } from './pages/candidatos-cadastro/candidatos-cadastro.component';
import { CandidatosCompetenciaComponent } from './pages/candidatos-competencia/candidatos-competencia.component';
import { CompetenciaProfissionalComponent } from './pages/candidatos-competencia/competencia-profissional/competencia-profissional.component';
import { CompetenciaLinguagemComponent } from './pages/candidatos-competencia/competencia-linguagem/competencia-linguagem.component';
import { CompetenciaSocialComponent } from './pages/candidatos-competencia/competencia-social/competencia-social.component';
import { CompetenciaCursosComponent } from './pages/candidatos-competencia/competencia-cursos/competencia-cursos.component';
@NgModule({
  declarations: [
    CandidatosCadastroComponent,
    CadastroInformacoesComponent,
    InformacoesEnderecoComponent,
    InformacoesProfissionaisComponent,
    InformacoesPessoaisComponent,
    ExperienciasAnterioresComponent,
    CandidatosCompetenciaComponent,
    CompetenciaProfissionalComponent,
    CompetenciaLinguagemComponent,
    CompetenciaSocialComponent,
    CompetenciaCursosComponent,
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
  exports: [CandidatosCadastroComponent],
})
export class CandidatosModule { }
