import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './ProductDetail/proddetail.component';

@NgModule({
    declarations: [
        ProductComponent,ProductDetailComponent
    ]
    , imports: [SharedModule,ProductRoutingModule],


})
export class ProductModule {

}