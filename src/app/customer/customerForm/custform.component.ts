import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/model/Customer';
import { CustomerService } from 'src/service/CustomerService';

@Component({
    selector:'cust-form',
    templateUrl:'./custform.component.html',
    styleUrls:['./custform.component.css']
})
export class CustomerFormComponent implements OnInit{
    id:number;
    name:string;
    age:number;
    adhar:number;
    show:boolean=true;
    cust:Customer;
    //@Output () myevent=new EventEmitter();
    constructor(private cservice:CustomerService,private router:Router,private activedroute:ActivatedRoute){
      
    }
    ngOnInit(){
        this.activedroute.paramMap.subscribe(param=>{
            let cid=parseInt(param.get('id'));
            if(cid){
                this.show=false;
                this.cust=this.cservice.getById(cid);
                this.id=this.cust.id;
                this.name=this.cust.name;
                this.age=this.cust.age;
                this.adhar=this.cust.adhar;
            }
        })
    }

    ngOnChanges(change:SimpleChanges){      
        if(change["cust"].currentValue!=change["cust"].previousValue){
            console.log(change);
            this.id=this.cust.id;
            this.name=this.cust.name;
            this.age=this.cust.age;
            this.adhar=this.cust.adhar;
        }
        this.show=(typeof this.id==='undefined' )?true:false;
       // console.log(this.id);
}

    addCustomer(){
        let cust=new Customer(this.id,this.name,this.age,this.adhar);
        
        this.cservice.addcustomer(cust);
        this.id=0;
        this.name="";
        this.age=0;
        this.adhar=0;
        this.router.navigate(['customer'])
       // this.myevent.emit(false);
    }
    UpdateCustomer(){
        let cust=new Customer(this.id,this.name,this.age,this.adhar);
        this.cservice.updatecustomer(cust);
        this.id=0;
        this.name="";
        this.age=0;
        this.adhar=0;
        this.router.navigate(['customer'])
       // this.myevent.emit(false);
    }
}