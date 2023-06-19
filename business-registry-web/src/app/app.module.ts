import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/commom/componentes/footer/footer.component';
import { MenuComponent } from './features/commom/componentes/menu/menu.component';
import { AboutComponent } from './features/commom/home/pages/about/about.component';
import { CadastrosModule } from './features/commom/home/pages/cadastros/cadastros.module';
import { IndexComponent } from './features/commom/home/pages/index/index.component';



@NgModule({
  declarations: [AppComponent, MenuComponent, AboutComponent, FooterComponent, IndexComponent],
  imports: [BrowserModule, FormsModule, CadastrosModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
