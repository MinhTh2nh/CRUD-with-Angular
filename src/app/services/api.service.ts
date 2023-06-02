import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  // Product
  //Add
  postProduct(data : any){
    return this.http.post<any>("http://localhost:3000/productList",data);
  }
  //Get
  getProducts(){
    return this.http.get<any>("http://localhost:3000/productList");
  }
  //Update
  putProduct(data : any , id : number){
    return this.http.put<any>(`http://localhost:3000/productList/${id}`, data);
  }
  deleteProduct(id : number){
  return this.http.delete<any>(`http://localhost:3000/productList/${id}`);
  }
  //Users
  postUsers(data : any){
    return this.http.post<any>("http://localhost:3000/userList",data);
  }
  //Get
  getUsers(){
    return this.http.get<any>("http://localhost:3000/userList");
  }
  //Update
  putUsers(data : any , id : number){
    return this.http.put<any>(`http://localhost:3000/userList/${id}`, data);
  }
  deleteUsers(id : number){
  return this.http.delete<any>(`http://localhost:3000/userList/${id}`);
  }
}
