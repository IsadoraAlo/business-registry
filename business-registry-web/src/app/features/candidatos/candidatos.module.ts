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
@NgModule({
  declarations: [CandidatosCadastroComponent, MenuCandidatoComponent, BoasVindasCandidatoComponent, CandidatosBuscaVagasComponent],
  imports: [CommonModule, AppRoutingModule, ComponentesModule, FormsModule, HttpClientModule],
  exports: [CandidatosCadastroComponent, BoasVindasCandidatoComponent],
})
export class CandidatosModule { }
