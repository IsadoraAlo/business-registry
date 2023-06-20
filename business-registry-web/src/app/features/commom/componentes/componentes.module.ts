import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [AppRoutingModule],
  exports: [MenuComponent, FooterComponent]
})
export class ComponentesModule { }
