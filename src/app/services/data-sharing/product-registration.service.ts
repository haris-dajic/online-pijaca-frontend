import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductRegistrationService {

  private productSource = new BehaviorSubject(new Product());
  currentProduct = this.productSource.asObservable();
  constructor() { }

  changeProduct(product: Product) {
    this.productSource.next(product)
  }

}
