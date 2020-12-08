import { Injectable } from '@angular/core';
import { Product } from 'src/model/Product';

@Injectable()
export class ProductService{
    parr:Product[]=[
        new Product( 1,"Lays" , 50),
        new Product(5,"nachos",60),
        new Product ( 2,"Dairymilk" , 100),
        new Product( 3,"Biscuit" , 40),
        new Product (4,"Puffs" ,30)
    ];
    getAllProduct():Product[]{
        return this.parr;
    }
    getByPid(pid:number):Product{
        for(let i=0;i<this.parr.length;i++){
            if(this.parr[i].pid==pid){
                return this.parr[i];
            }
        }
    }
    addProduct(product:Product){
        console.log(product);
        this.parr.push(product);
    }
}