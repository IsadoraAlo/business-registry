import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
@NgModule({
  declarations: [MenuComponent, FooterComponent, MenuUsuarioComponent],
  imports: [AppRoutingModule],
  exports: [MenuComponent, FooterComponent, MenuUsuarioComponent]
})
export class ComponentesModule { }
