import { Routes } from '@angular/router';
import { DefaultProductsComponent } from './components/products/default-products/default-products.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { AddImageComponent } from './components/products/add-image/add-image.component';
import { CreateProductDefaultComponent } from './components/products/create-product-default/create-product-default.component';

export const routes: Routes = [
    {path: '', component: DefaultProductsComponent, pathMatch: 'full'},
    {
        path: 'create/product', 
        component: CreateProductDefaultComponent,
        children: [
            {path:'', component:CreateProductComponent},
            {path:'image', component: AddImageComponent}
        ]
    }
];