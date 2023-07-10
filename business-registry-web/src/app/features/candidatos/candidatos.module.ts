import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CandidatosCadastroComponent } from './candidatos-cadastro/candidatos-cadastro.component';
import { MenuCandidatoComponent } from './componentes/menu-candidato/menu-candidato.component';
import { BoasVindasCandidatoComponent } from './pages/boas-vindas-candidato/boas-vindas-candidato.component';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { CandidatosBuscaVagasComponent } from './pages/candidatos-busca-vagas/candidatos-busca-vagas.component';
@NgModule({
  declarations: [CandidatosCadastroComponent, MenuCandidatoComponent, BoasVindasCandidatoComponent, CandidatosBuscaVagasComponent],
  imports: [CommonModule, AppRoutingModule, ComponentesModule],
  exports: [CandidatosCadastroComponent, BoasVindasCandidatoComponent]
})
export class CandidatosModule { }
