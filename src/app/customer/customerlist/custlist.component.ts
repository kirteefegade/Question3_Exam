import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/model/Customer';
import { CustomerService } from 'src/service/CustomerService';

@Component({
    selector:"cust-list",
    templateUrl:"./custlist.component.html",
   styleUrls:["./custlist.component.css"]
})
export class CustomerListComponent{
   
    @Input() cust:Customer[];
   /*  @Output() showViewEvent=new EventEmitter();
    @Output() deleteCustEvent=new EventEmitter();
    @Output() editCustEvent=new EventEmitter(); */
    
    constructor(private router:Router,private cservice:CustomerService){

    }
    showCustomer(c:Customer){
      
        //this.showViewEvent.emit(c);
        this.router.navigate(['/customer/view',c.id]);
        
    }
    updateCustomer(c:Customer){
       // this.editCustEvent.emit(c);
       this.router.navigate(['/customer/edit',c.id]);
    }
    deleteCustomer(c:Customer){
        //this.deleteCustEvent.emit(c);
      
        this.cservice.deletecustomer(c);
        this.router.navigate(['/customer']);
    }
}