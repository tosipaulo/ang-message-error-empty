import { PageUmModule } from './pages/page-um/page-um.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-um',
    pathMatch: 'full'
  },
  {
    path: 'page-um',
    loadChildren: () => import('./pages/page-um/page-um.module').then(m => m.PageUmModule)
  },
  {
    path: 'page-dois',
    loadChildren: () => import('./pages/page-dois/page-dois.module').then(m => m.PageDoisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
