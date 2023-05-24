import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastrosModule } from './features/commom/cadastros/cadastros.module';
import { MenuComponent } from './features/commom/home/menu/menu.component';
import { AboutComponent } from './features/commom/home/pages/about/about.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, AboutComponent],
  imports: [BrowserModule, FormsModule, CadastrosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
