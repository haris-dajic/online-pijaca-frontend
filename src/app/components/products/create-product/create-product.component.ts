import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductRegistrationService } from 'src/app/services/data-sharing/product-registration.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    price: [''],
    delivery: ['']
  });

  constructor(private fb: FormBuilder, private productRegistration: ProductRegistrationService) { 
    this.setDefaultValues();
  }

  ngOnInit() {
  }

  setDefaultValues(){
    this.productForm.patchValue({ delivery: false});
  }

  deliveryChange(value) {
    this.productForm.patchValue({ delivery: value.target.checked});
  }

  stepTwo() {
    var product = new Product();
    product.name = this.productForm.get('title').value;
    product.description = this.productForm.get('description').value;
    product.price = this.productForm.get('price').value;
    product.delivery = this.productForm.get('delivery').value;
    this.productRegistration.changeProduct(product);
  }
}
