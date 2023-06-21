import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/commom/home/pages/about/about.component';
import { CadastrosComponent } from './features/commom/home/pages/cadastros/cadastros.component';
import { IndexComponent } from './features/commom/home/pages/index/index.component';
import { LoginComponent } from './features/commom/home/pages/login/login.component';
import { BoasVindasCandidatoComponent } from './features/candidatos/boas-vindas-candidato/boas-vindas-candidato.component';
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
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'candidatos',
    children: [
      {
        path: 'pagina-inicial',
        component: BoasVindasCandidatoComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
