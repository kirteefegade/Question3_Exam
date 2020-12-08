import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './ProductDetail/proddetail.component';
import { ProductFormComponent } from './ProductForm/prodform.component';

const routes:Routes=[
                        {path:"product",children:[
                            {path:"",component:ProductComponent},
                            {path:"view/:pid",component:ProductDetailComponent},
                            {path:"edit/:pid",component:ProductFormComponent},
                            {path:"add",component:ProductFormComponent},
                            {path:"added",component:ProductComponent},
                            {path:"closeview",component:ProductComponent}
                        ]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ProductRoutingModule{

}