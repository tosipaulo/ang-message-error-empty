import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageStatusComponent } from './page-status.component';
import { PageStatusRoutingModule } from './page-status-routing.module';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [PageStatusComponent],
  imports: [
    CommonModule,
    PageStatusRoutingModule,
    HttpClientModule
  ]
})
export class PageStatusModule { }
