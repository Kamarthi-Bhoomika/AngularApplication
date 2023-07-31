import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public customerlist = new BehaviorSubject<any>([])
  public orderlist:any=[]

  constructor() { }

  getcustomer(){
    return this.customerlist.asObservable();
  }

  viewDetails(customer:any){
    this.orderlist.push(customer);
    this.customerlist.next(this.orderlist)
  }
}
