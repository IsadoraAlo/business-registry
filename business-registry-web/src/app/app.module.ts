import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastrosModule } from './features/commom/cadastros/cadastros.module';
import { MenuComponent } from './features/componentes/menu/menu.component';
import { AboutComponent } from './features/commom/home/pages/about/about.component';
import { FooterComponent } from './features/componentes/footer/footer.component';
import { IndexComponent } from './features/commom/home/pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, MenuComponent, AboutComponent, FooterComponent, IndexComponent],
  imports: [BrowserModule, FormsModule, CadastrosModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
