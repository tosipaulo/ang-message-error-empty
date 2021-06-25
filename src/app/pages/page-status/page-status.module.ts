import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageStatusComponent } from './page-status.component';
import { PageStatusRoutingModule } from './page-status-routing.module';



@NgModule({
  declarations: [PageStatusComponent],
  imports: [
    CommonModule,
    PageStatusRoutingModule
  ]
})
export class PageStatusModule { }
