import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customerDetail/custdetail.component';
import { CustomerFormComponent } from './customerForm/custform.component';
import { CustomerListComponent } from './customerlist/custlist.component';


@NgModule({
    declarations: [
        CustomerListComponent, CustomerComponent, CustomerDetailComponent
        , CustomerFormComponent
    ]
    , imports: [SharedModule,CustomerRoutingModule],


})
export class CustomerModule {

}