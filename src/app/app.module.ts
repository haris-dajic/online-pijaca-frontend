import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { routes } from './routes';
import { DefaultProductsComponent } from './components/products/default-products/default-products.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { AddImageComponent } from './components/products/add-image/add-image.component';
import { CreateProductDefaultComponent } from './components/products/create-product-default/create-product-default.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      DefaultProductsComponent,
      CreateProductComponent,
      AddImageComponent,
      CreateProductDefaultComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot(routes),
      ReactiveFormsModule,
      FormsModule,
      FileUploadModule,
      AngularFontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
