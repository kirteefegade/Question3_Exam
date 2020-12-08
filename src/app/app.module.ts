import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { CustomerService } from 'src/service/CustomerService';

import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { ProductService } from 'src/service/productService';


@NgModule({
  declarations: [
    AppComponent,
     HomeComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    CustomerModule,ProductModule,AppRoutingModule
  ],
  providers: [CustomerService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
