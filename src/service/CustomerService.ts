import { Component, Injectable } from '@angular/core'
import { Customer } from 'src/model/Customer'

@Injectable()
export class CustomerService{
   
    
    carr:Customer[]=[
            new Customer(1,"abc",12,123457678890),
            new Customer(2,"xyz",33,876496858423),
            new Customer(3,"pqr",66,345762896062),
            new Customer(4,"efg",45,908768257890)
        ]
    
        getAllCustomers():Customer[]{
            return this.carr;
        }
        addcustomer(cust:Customer){
            this.carr.push(cust);
        }
        updatecustomer(cust:Customer){
            for(let i=0;i<this.carr.length;i++){
                if(this.carr[i].id==cust.id){
                    this.carr[i].name=cust.name;
                    this.carr[i].age=cust.age;
                    this.carr[i].adhar=cust.adhar;
                    break;
                }

            }
        }
        deletecustomer(c:Customer){
            for(let i=0;i<this.carr.length;i++){
                if(this.carr[i].id==c.id){
                    this.carr.splice(i,1);
                    break;
                }

            }
        }
        getById(id:number):Customer{
            for(let i=0;i<this.carr.length;i++){
                if(this.carr[i].id==id){
                    return this.carr[i];
                }
            }
        }
    
}