;import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageUmComponent } from './page-um.component';


const routes: Routes = [
  {
    path: '',
    component: PageUmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageUmRoutingModule { }