import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosBuscaVagasComponent } from './features/candidatos/pages/candidatos-busca-vagas/candidatos-busca-vagas.component';
import { AboutComponent } from './features/commom/home/pages/about/about.component';
import { BoasVindasUsuarioComponent } from './features/commom/home/pages/boas-vindas-usuario/boas-vindas-usuario.component';
import { CadastrosComponent } from './features/commom/home/pages/cadastros/cadastros.component';
import { IndexComponent } from './features/commom/home/pages/index/index.component';
import { LoginComponent } from './features/commom/home/pages/login/login.component';
import { CadastroInformacoesComponent } from './features/candidatos/pages/cadastro-informacoes/cadastro-informacoes.component';
import { CadastroInformacoesEmpresaComponent } from './features/empresas/pages/cadastro-informacoes/cadastro-informacoes.component';
import { NovaVagaComponent } from './features/empresas/pages/nova-vaga/nova-vaga.component';
const routes: Routes = [
  {
    path: '',
    component: NovaVagaComponent,
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
        component: BoasVindasUsuarioComponent
      },
      {
        path: 'busca-vagas',
        component: CandidatosBuscaVagasComponent
      },
      {
        path: 'cadastro-dados',
        component: CadastroInformacoesComponent
      },
    ]
  },
  {
    path:  'empresas',
    children:[
      {
        path:'pagina-inicial',
        component: BoasVindasUsuarioComponent
      },
      {
        path:'cadastro-dados',
        component: CadastroInformacoesEmpresaComponent
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
