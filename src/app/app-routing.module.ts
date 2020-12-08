import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer/customerDetail/custdetail.component';
import { CustomerFormComponent } from './customer/customerForm/custform.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
                        
                          {
                            path:"home",component:HomeComponent
                          },
                          {
                            path:"product",component:ProductComponent
                          },
                          /* {
                            path:"customer",component:CustomerComponent
                          },
                          {
                              path:"customer/view/:id" ,component:CustomerDetailComponent
                          },
                          {
                            path:"customer/edit/:id" ,component:CustomerFormComponent
                          }, */
                          {
                            path:"home/#aboutus",component:HomeComponent,pathMatch:"full"
                          },
                          {  
                            path:"home/#contactus",component:HomeComponent,pathMatch:"full"
                          },
                          {
                            path:"",redirectTo :"/home",pathMatch:"full"
                          },
                          {  
                            path:"**",component:PageNotFoundComponent
                          }
                         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
