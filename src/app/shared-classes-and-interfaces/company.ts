export class Company {
  name: string;
  logo: string;
  about: string;
  tags: string[];
  isOpen: boolean;

  constructor() {
      this.name = 'ITI E-Commerce';
      this.logo = 'http://placeimg.com/640/360/any';
      this.about = 'This is a Demo for E-commerce using Angular';
      this.tags = ['E_commerce', 'Sale', 'Products'];
      this.isOpen = true;
    }
}
