import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/model/Product';
import { ProductService } from 'src/service/productService';

@Component({
    selector:"prod-detail",
    templateUrl:"./proddetail.Component.html",
    styleUrls:["./proddetail.Component.css"]
})
export class ProductDetailComponent implements OnInit{
    product:Product;

    constructor(private route:ActivatedRoute,private pservice:ProductService,private router:Router){

    }
    ngOnInit(){
       
        this.route.paramMap.subscribe(param=>{
            const pid=parseInt(param.get('pid'));
            if(pid){
                this.product=this.pservice.getByPid(pid);
                console.log(this.product);
            }
        })
    }
    closeview(){
        this.router.navigate(["/product/closeview"])
    }

}