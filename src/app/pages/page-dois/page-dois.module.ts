import { PageDoisComponent } from './page-dois.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDoisRoutingModule } from './page-dois-routing.module';



@NgModule({
  declarations: [PageDoisComponent],
  imports: [
    CommonModule,
    PageDoisRoutingModule
  ]
})
export class PageDoisModule { }
