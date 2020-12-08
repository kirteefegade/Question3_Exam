import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/model/Product';
import { ProductService } from 'src/service/productService';

@Component({
    selector: "product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {

    pid: number;
    pname: string;
    price: number;
    parr: Product[];
    constructor(private pservice: ProductService, private router: Router) {

    }
    ngOnInit() {
        this.parr = this.pservice.getAllProduct();
       // console.log(this.parr);
    }
    showProduct(p:Product) {
        this.router.navigate(["/product/view",p.pid])
       //console.log("show product");
    }
    updateProduct(product:Product){
        this.router.navigate(["/product/edit",product.pid]);
    }
    showform(){
        this.router.navigate(["/product/add"])
    }

}