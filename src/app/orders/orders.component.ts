import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../api/customer.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  public customerlist:any;
  constructor(private api:CustomerService){}

  ngOnInit(): void {
    this.api.getcustomer().subscribe((res: any)=>{
    //console.log(res);
    this.customerlist = res;
  })
  }

}
