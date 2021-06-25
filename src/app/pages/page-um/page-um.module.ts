import { PageUmRoutingModule } from './page-um-routing.module';
import { PageUmComponent } from './page-um.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PageUmComponent],
  imports: [
    CommonModule,
    PageUmRoutingModule
  ]
})
export class PageUmModule { }
