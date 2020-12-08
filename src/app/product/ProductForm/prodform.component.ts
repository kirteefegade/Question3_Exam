import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/model/Product';
import { ProductService } from 'src/service/productService';

@Component({
    selector:'prod-form',
    templateUrl:"./prodform.Component.html",
    styleUrls:["./prodform.Component.css"]

})
export class ProductFormComponent{
    pid:number;
    pname:string;
    price:number;
    constructor(private pservice:ProductService,private router:Router){
        
    }
    addProduct(pid:number){   
        let prod=new Product(this.pid,this.pname,this.price);
        console.log(pid);
        this.pservice.addProduct(prod);
        this.router.navigate(["/product/added"]);

    }
}