import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  mooovLogo = '/assets/imgs/logo/tori-mooov-trans.png';

  constructor() { }

  ngOnInit(): void {
  }

}
