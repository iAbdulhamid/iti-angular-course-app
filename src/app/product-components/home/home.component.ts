import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared-classes-and-interfaces/company';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myCompany: Company;

  constructor() {
    this.myCompany = new Company();
  }

  viewCompanyInfo(): string {
    return `Company Name: ${this.myCompany.name}
            About: ${this.myCompany.about}`;
  }

  ToggleActiveStatus(): void {
    this.myCompany.isOpen = !this.myCompany.isOpen;
  }

  ngOnInit() {
  }

}
