import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-um',
  templateUrl: './page-um.component.html',
  styleUrls: ['./page-um.component.css']
})
export class PageUmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navitageStatus(type) {
    this.router.navigate([`/status/${type}`]);
  }

}
