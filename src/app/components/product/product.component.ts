import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {


  //köşeli parantez array demek
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {}
}