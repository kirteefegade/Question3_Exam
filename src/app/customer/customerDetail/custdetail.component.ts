import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/model/Customer';
import { CustomerService } from 'src/service/CustomerService';


@Component({
    selector:"cust-detail",
    templateUrl:"./custdetail.component.html",
    styleUrls: ["./custdetail.component.css"]
})

export class CustomerDetailComponent implements OnInit{
    customer:Customer;
   /* @Input() customer:Customer;
    @Input() flag:boolean;
   @Output() closeEvent =new EventEmitter();*/
   
    constructor(private router:ActivatedRoute,private cservice:CustomerService,private rout:Router){

    }
    closeView(){
      
        //this.closeEvent.emit(false);
        
       this.rout.navigate(['/customer']);
    }
    ngOnInit(){
        this.router.paramMap.subscribe(param =>{        //id in url is accepted by activaterouter
            const cid=parseInt(param.get('id'));
            if(cid){
               this.customer= this.cservice.getById(cid);    
            }
        });
    }

}