import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroInformacoesComponent } from './features/candidatos/pages/cadastro-informacoes/cadastro-informacoes.component';
import { CandidatosBuscaVagasComponent } from './features/candidatos/pages/candidatos-busca-vagas/candidatos-busca-vagas.component';
import { CurriculoViewComponent } from './features/candidatos/pages/curriculo-view/curriculo-view.component';
import { MenuUsuarioComponent } from './features/commom/componentes/menu-usuario/menu-usuario.component';
import { AboutComponent } from './features/commom/home/pages/about/about.component';
import { BoasVindasUsuarioComponent } from './features/commom/home/pages/boas-vindas-usuario/boas-vindas-usuario.component';
import { CadastrosComponent } from './features/commom/home/pages/cadastros/cadastros.component';
import { IndexComponent } from './features/commom/home/pages/index/index.component';
import { LoginComponent } from './features/commom/home/pages/login/login.component';
import { CadastroInformacoesEmpresaComponent } from './features/empresas/pages/cadastro-informacoes/cadastro-informacoes.component';
import { NovaEtapaComponent } from './features/empresas/pages/nova-vaga/nova-etapa/nova-etapa.component';
import { NovaVagaComponent } from './features/empresas/pages/nova-vaga/nova-vaga.component';
import { ViewUsuarioComponent } from './features/commom/componentes/view-usuario/view-usuario.component';
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
    component: MenuUsuarioComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pagina-inicial',
      },
      {
        path: 'pagina-inicial',
        pathMatch: 'full',
        component: BoasVindasUsuarioComponent
      },
      {
        path: 'busca-vagas',
        pathMatch: 'full',
        component: CandidatosBuscaVagasComponent
      },
      {
        path: 'cadastro-dados',
        pathMatch: 'full',
        component: CadastroInformacoesComponent
      },
      {
        path: 'curriculo-view',
        pathMatch: 'full',
        component: CurriculoViewComponent
      },
      {
        path: 'view',
        pathMatch: 'full',
        component: ViewUsuarioComponent
      },
    ]
  },
  {
    path: 'empresas',
    component: MenuUsuarioComponent,
    children: [
      {
        path: '',
        redirectTo: 'pagina-inicial',
        pathMatch: 'full'
      },
      {
        path: 'pagina-inicial',
        pathMatch: 'full',
        component: BoasVindasUsuarioComponent
      },
      {
        path: 'cadastro-dados',
        pathMatch: 'full',
        component: CadastroInformacoesEmpresaComponent
      },
      {
        path: 'vagas',
        component: NovaVagaComponent,
        pathMatch: 'full',
      },
      {
        path: 'etapas',
        component: NovaEtapaComponent,
        pathMatch: 'full',
      },
      {
        path: 'view',
        pathMatch: 'full',
        component: ViewUsuarioComponent
      },
    ]
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
