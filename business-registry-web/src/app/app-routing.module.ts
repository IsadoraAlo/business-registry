import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './features/commom/home/pages/index/index.component';
import { AboutComponent } from './features/commom/home/pages/about/about.component';
import { CadastrosComponent } from './features/commom/home/pages/cadastros/cadastros.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'home',
    component: IndexComponent,
  },
  {
    path: 'sobre',
    component: AboutComponent
  },
  {
    path: 'cadastros',
    component: CadastrosComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
