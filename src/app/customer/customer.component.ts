import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/model/Customer';
import { CustomerService } from 'src/service/CustomerService';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    id : number;
    name :string;
    age :number;
    adhar:number;
    cust:Customer[] ;
    customer:Customer;
   flag=false;
   flag1=false;
  constructor(private cservice:CustomerService,private router:Router) 
  {}
  selectedCustomer : Customer=new Customer(0,"",0,0);
  

  ngOnInit(): void {
    this.cust=this.cservice.getAllCustomers();
  }

  showCustomer(c:Customer){
    this.flag1=true;
    //  console.log(c);
      this.selectedCustomer=c;
  }
  showForm(){
      this.flag=true;
      //console.log(this.flag);
      this.router.navigate(['/customer/add']);
      this.customer=new Customer();
  }
  updateCustomer(c:Customer){
    this.flag=true;
    this.customer=c;
    console.log(this.customer);
  }

  deleteCustomer(c:Customer){
    this.cservice.deletecustomer(c);
    console.log("In cutsomer delete ")
  }
}
