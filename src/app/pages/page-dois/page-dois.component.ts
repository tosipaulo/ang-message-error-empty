import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-dois',
  templateUrl: './page-dois.component.html',
  styleUrls: ['./page-dois.component.css']
})
export class PageDoisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navitageStatus(type) {
    this.router.navigate([`/status/${type}`]);
  }

}
