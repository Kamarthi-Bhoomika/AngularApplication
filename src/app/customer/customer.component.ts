import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../api/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  filteredString: string = '';
  public customerlist:any;
  constructor(private api:CustomerService){}

  ngOnInit():void{
    this.api.getcustomer().subscribe((res: any)=>{
      //console.log(res);
      this.customerlist = res;
    })
  }

}
