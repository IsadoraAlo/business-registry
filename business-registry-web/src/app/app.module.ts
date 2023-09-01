import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './features/commom/componentes/componentes.module';
import { AboutComponent } from './features/commom/home/pages/about/about.component';
import { CadastrosModule } from './features/commom/home/pages/cadastros/cadastros.module';
import { IndexComponent } from './features/commom/home/pages/index/index.component';
import { LoginComponent } from './features/commom/home/pages/login/login.component';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { BoasVindasUsuarioComponent } from './features/commom/home/pages/boas-vindas-usuario/boas-vindas-usuario.component';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { EmpresasModule } from './features/empresas/empresas.module';
import { CandidatosModule } from './features/candidatos/candidatos.module';
@NgModule({
  declarations: [AppComponent, AboutComponent, IndexComponent, LoginComponent, BoasVindasUsuarioComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CadastrosModule,
    EmpresasModule,
    CandidatosModule,
    HttpClientModule,
    ComponentesModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
