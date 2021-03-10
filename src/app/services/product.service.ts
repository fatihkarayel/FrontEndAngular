import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //bunun sayesinde api çağrısı yapabiliyoruz.
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44357/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
  
}
