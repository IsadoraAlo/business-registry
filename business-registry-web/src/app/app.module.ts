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
@NgModule({
  declarations: [AppComponent, AboutComponent, IndexComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, CadastrosModule, AppRoutingModule,ComponentesModule, NgxMaskModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule { }
