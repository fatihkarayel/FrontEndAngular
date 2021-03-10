import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http'; //bunun sayesinde api çağrısı yapabiliyoruz.
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  //köşeli parantez array demek
  products: Product[] = [];
  dataLoaded=false;
  //apiUrl = 'https://localhost:44357/api/products/getall';

  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: '',
  //   success: true,
  // };

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    //console.log('init çalıştı');
    this.getProducts();
  }

  getProducts() {
    // this.httpClient
    //   .get<ProductResponseModel>(this.apiUrl)
    //   .subscribe((response) => {
    //     this.products = response.data;
    //   });
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded=true;
    })
  }
}
