import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { ViewUsuarioComponent } from './view-usuario/view-usuario.component';
@NgModule({
  declarations: [MenuComponent, FooterComponent, MenuUsuarioComponent, EmptyStateComponent, ViewUsuarioComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [MenuComponent, FooterComponent, MenuUsuarioComponent, EmptyStateComponent]
})
export class ComponentesModule { }
