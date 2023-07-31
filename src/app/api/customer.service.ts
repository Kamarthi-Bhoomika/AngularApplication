import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

getcustomer(){
  return this.http.get("http://localhost:3000/posts")
  .pipe(map((res:any) => {
    return res;
  }))
}

}
