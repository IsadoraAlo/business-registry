import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { ViewUsuarioComponent } from './view-usuario/view-usuario.component';
import { ModalAvisoComponent } from './menu-usuario/modal-aviso/modal-aviso.component';
@NgModule({
  declarations: [MenuComponent, FooterComponent, MenuUsuarioComponent, EmptyStateComponent, ViewUsuarioComponent, ModalAvisoComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [MenuComponent, FooterComponent, MenuUsuarioComponent, EmptyStateComponent, ModalAvisoComponent]
})
export class ComponentesModule { }
