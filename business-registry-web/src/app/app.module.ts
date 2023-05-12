import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastrosModule } from './features/commom/cadastros/cadastros.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CadastrosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
