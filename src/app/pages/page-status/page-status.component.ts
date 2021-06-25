import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageStatusService } from './page-status.service';

@Component({
  selector: 'app-page-status',
  templateUrl: './page-status.component.html',
  styleUrls: ['./page-status.component.css']
})
export class PageStatusComponent implements OnInit {

  content;

  constructor(private pageStatusService: PageStatusService) { }

  ngOnInit(): void {

    this.content = this.pageStatusService.getStatus();
    
  }

}
