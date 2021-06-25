import { PageStatusService } from './../page-status/page-status.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-um',
  templateUrl: './page-um.component.html',
  styleUrls: ['./page-um.component.css']
})
export class PageUmComponent implements OnInit {

  constructor(
    private router: Router,
    private pageStatusService: PageStatusService
    ) { }

  ngOnInit(): void {
  }

  navitageStatus(type) {
    this.pageStatusService.setStatus({
      title: `title ${type}`,
      subtitle: 'Sutitle lorem',
      btnNavigate: 'Ir para page',
      btnNavigateCallback: () => this.router.navigate(['/page-dois'])
    });

    this.router.navigate([`/status/${type}`]);
  }

}
