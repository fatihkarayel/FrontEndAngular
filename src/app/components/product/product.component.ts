import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http'; //bunun sayesinde api çağrısı yapabiliyoruz.
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  //köşeli parantez array demek
  products: Product[] = [];
  dataLoaded=false;
  filterText="";
  //apiUrl = 'https://localhost:44357/api/products/getall';

  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: '',
  //   success: true,
  // };

  constructor(private productService:ProductService, 
    private activatedRoute: ActivatedRoute, 
    private toastrService:ToastrService,
    private cartService: CartService) {}

  ngOnInit(): void {
    //console.log('init çalıştı');
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  
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

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded=true;
    })
  }

  addToCart(product: Product){
    if(product.productId===1){
      this.toastrService.error("Hata", "Bu ürün sepete eklenemez")
    }else{
      this.toastrService.success("Sepete Eklendi", product.productName);
      this.cartService.addToCart(product)
    }
    
    //console.log(product)
  }

}
