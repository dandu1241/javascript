import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public http:HttpClient) { }
  products:any;
  ngOnInit(): void {
    this.http.get("https://fakestoreapi.com/products")
    .subscribe((products)=>{
      console.log(products);
      this.products = products;
    })
  }

}
