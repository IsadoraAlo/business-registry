import { ModalTutorialComponent } from './features/commom/home/pages/boas-vindas-usuario/modal-tutorial/modal-tutorial.component';
import { BoasVindasUsuarioComponent } from './features/commom/home/pages/boas-vindas-usuario/boas-vindas-usuario.component';
import { CadastrosModule } from './features/commom/home/pages/cadastros/cadastros.module';
import { ComponentesModule } from './features/commom/componentes/componentes.module';
import { AboutComponent } from './features/commom/home/pages/about/about.component';
import { IndexComponent } from './features/commom/home/pages/index/index.component';
import { LoginComponent } from './features/commom/home/pages/login/login.component';
import { AdministracaoModule } from './features/administracao/administracao.module';
import { CandidatosModule } from './features/candidatos/candidatos.module';
import { EmpresasModule } from './features/empresas/empresas.module';
import { VagasModule } from './features/vagas/vagas.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexComponent,
    LoginComponent,
    ModalTutorialComponent,
    BoasVindasUsuarioComponent,
  ],
  imports: [
    FormsModule,
    VagasModule,
    BrowserModule,
    EmpresasModule,
    CadastrosModule,
    AppRoutingModule,
    HttpClientModule,
    CandidatosModule,
    ComponentesModule,
    AdministracaoModule,
    NgxMaskModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
