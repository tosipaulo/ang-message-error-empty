import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageStatusService } from '../page-status/page-status.service';

@Component({
  selector: 'app-page-dois',
  templateUrl: './page-dois.component.html',
  styleUrls: ['./page-dois.component.css']
})
export class PageDoisComponent implements OnInit {

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
      btnNavigateCallback: () => this.router.navigate(['/page-um']),
      btnTenteNovamente: 'Tente novamente',
      btnTenteNovamenteCallback: () => console.log('aqui tu faz request')
    });

    this.router.navigate([`/status/${type}`]);
  }

}
