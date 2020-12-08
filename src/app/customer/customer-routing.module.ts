import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customerDetail/custdetail.component';
import { CustomerFormComponent } from './customerForm/custform.component';


const routes:Routes=[
                {path:"customer",children:[
                    {path:"",component:CustomerComponent},
                    {path:"view/:id",component:CustomerDetailComponent},
                    {path:"add",component:CustomerFormComponent},
                    {path:"edit/:id",component:CustomerFormComponent},
                   
                ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule{

}