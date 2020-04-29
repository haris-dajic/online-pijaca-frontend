import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-products',
  templateUrl: './default-products.component.html',
  styleUrls: ['./default-products.component.css']
})
export class DefaultProductsComponent implements OnInit {
  
  data: any;
  constructor() { }

  ngOnInit() {
    console.log('haris');
    this.data = [
      {
        name: 'haris',
        lastname: 'dajic'
      },
      {
        name: 'haris1',
        lastname: 'dajic1'
      },
      {
        name: 'haris2',
        lastname: 'dajic2'
      }
    ];
  }

}
