import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobileMenuOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenuClass() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
