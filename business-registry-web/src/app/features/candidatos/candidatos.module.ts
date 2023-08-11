import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { MenuCandidatoComponent } from './componentes/menu-candidato/menu-candidato.component';
import { BoasVindasCandidatoComponent } from './pages/boas-vindas-candidato/boas-vindas-candidato.component';
import { CandidatosBuscaVagasComponent } from './pages/candidatos-busca-vagas/candidatos-busca-vagas.component';
import { CandidatosCadastroComponent } from './pages/candidatos-cadastro/candidatos-cadastro.component';
import { NgxMaskModule } from 'ngx-mask';
import { CadastroInformacoesComponent } from './pages/cadastro-informacoes/cadastro-informacoes.component';
import { CadastroInformacoesEnderecoComponent } from './pages/cadastro-informacoes/cadastro-informacoes-endereco/cadastro-informacoes-endereco.component';
@NgModule({
  declarations: [CandidatosCadastroComponent, MenuCandidatoComponent, BoasVindasCandidatoComponent, CandidatosBuscaVagasComponent, CadastroInformacoesComponent, CadastroInformacoesEnderecoComponent],
  imports: [CommonModule, AppRoutingModule, ComponentesModule, FormsModule, HttpClientModule, NgxMaskModule.forChild()],
  exports: [CandidatosCadastroComponent, BoasVindasCandidatoComponent],
})
export class CandidatosModule { }
