import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroInformacoesComponent } from './features/candidatos/pages/cadastro-informacoes/cadastro-informacoes.component';
import { MenuUsuarioComponent } from './features/commom/componentes/menu-usuario/menu-usuario.component';
import { ViewUsuarioComponent } from './features/commom/componentes/view-usuario/view-usuario.component';
import { AboutComponent } from './features/commom/home/pages/about/about.component';
import { BoasVindasUsuarioComponent } from './features/commom/home/pages/boas-vindas-usuario/boas-vindas-usuario.component';
import { CadastrosComponent } from './features/commom/home/pages/cadastros/cadastros.component';
import { IndexComponent } from './features/commom/home/pages/index/index.component';
import { LoginComponent } from './features/commom/home/pages/login/login.component';
import { CadastroInformacoesEmpresaComponent } from './features/empresas/pages/cadastro-informacoes/cadastro-informacoes.component';
import { NovaEtapaComponent } from './features/empresas/pages/nova-vaga/nova-etapa/nova-etapa.component';
import { NovaVagaComponent } from './features/empresas/pages/nova-vaga/nova-vaga.component';
import { VagasListComponent } from './features/vagas/list-vagas/vagas-list.component';
import { ViewEtapasComponent } from './features/vagas/view-etapas/view-etapas.component';
import { ViewVagasInscritasComponent } from './features/vagas/view-vagas-inscritas/view-vagas-inscritas.component';
import { ViewVagasComponent } from './features/vagas/view-vagas/view-vagas.component';
import { ViewEntrevistaComponent } from './features/vagas/view-etapas/view-entrevista/view-entrevista.component';
import { ViewQuestionarioComponent } from './features/vagas/view-etapas/view-questionario/view-questionario.component';
import { CandidatosInscritosListComponent } from './features/vagas/vagas-empresa/list-vagas-empresa/list-vagas-empresa.component';
import { VagasEmpresaViewComponent } from './features/vagas/vagas-empresa/vagas-empresa-view/vagas-empresa-view.component';
import { CandidatoViewComponent } from './features/vagas/vagas-empresa/vagas-empresa-view/list-candidatos/candidato-view/candidato-view.component';
import { CandidatosCompetenciaComponent } from './features/candidatos/pages/candidatos-competencia/candidatos-competencia.component';
import { AdmCandidatoListComponent } from './features/administracao/adm-candidato-list/adm-candidato-list.component';
import { AdmEmpresaListComponent } from './features/administracao/adm-empresa-list/adm-empresa-list.component';
import { AdmViewComponent } from './features/administracao/adm-view/adm-view.component';
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
    path: 'administrativo',
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
        path: 'candidato-list',
        pathMatch: 'full',
        component: AdmCandidatoListComponent
      },
      {
        path: 'empresa-list',
        pathMatch: 'full',
        component: AdmEmpresaListComponent
      },
      {
        path: 'view/:id',
        pathMatch: 'full',
        component: AdmViewComponent
      },
    ]
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
        path: 'cadastro-dados',
        pathMatch: 'full',
        component: CadastroInformacoesComponent
      },
      {
        path: 'suas-competencias',
        pathMatch: 'full',
        component: CandidatosCompetenciaComponent
      },
      {
        path: 'view',
        pathMatch: 'full',
        component: ViewUsuarioComponent
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: CandidatoViewComponent
      }
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
  {
    path: 'vagas',
    component: MenuUsuarioComponent,
    children: [
      {
        path: 'suas-vagas',
        pathMatch: 'full',
        component: CandidatosInscritosListComponent
      },
      {
        path: 'candidatos/:id',
        pathMatch: 'full',
        component: VagasEmpresaViewComponent
      },
      {
        path: 'buscar',
        pathMatch: 'full',
        component: VagasListComponent
      },
      {
        path: 'view/:id',
        pathMatch: 'full',
        component: ViewVagasComponent
      },
      {
        path: 'inscritas',
        pathMatch: 'full',
        component: ViewVagasInscritasComponent
      },
    ]
  },
  {
    path: 'etapas',
    component: MenuUsuarioComponent,
    children: [
      {
        path: 'questionario',
        pathMatch: 'full',
        component: ViewQuestionarioComponent
      },
      {
        path: 'entrevista',
        pathMatch: 'full',
        component: ViewEntrevistaComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: ViewEtapasComponent
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: ViewEtapasComponent
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
