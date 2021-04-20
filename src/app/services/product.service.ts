import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductAddComponent } from '../components/product-add/product-add.component';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44300/api/';



  constructor(private httpClient: HttpClient) {}

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getall" 
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let  newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
 }

 add(product:Product){
   return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
 }
}
