import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EmpresasCadastrosComponent } from './empresas-cadastros/empresas-cadastros.component';
import { ComponentesModule } from '../commom/componentes/componentes.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { CadastroInformacoesEmpresaComponent } from './pages/cadastro-informacoes/cadastro-informacoes.component';
import { InformacoesEnderecoComponent } from './pages/cadastro-informacoes/informacoes-endereco/informacoes-endereco.component';
import { CommonModule } from '@angular/common';
import { NovaVagaComponent } from './pages/nova-vaga/nova-vaga.component';
import { NovaEtapaComponent } from './pages/nova-vaga/nova-etapa/nova-etapa.component';
@NgModule({
  declarations: [EmpresasCadastrosComponent, CadastroInformacoesEmpresaComponent, InformacoesEnderecoComponent, NovaVagaComponent, NovaEtapaComponent, ],
  imports: [CommonModule, AppRoutingModule, ComponentesModule, FormsModule, HttpClientModule, NgxMaskModule.forChild()],
  exports: [EmpresasCadastrosComponent],
})
export class EmpresasModule { }
