import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [MenuComponent, FooterComponent]
})
export class ComponentesModule { }
