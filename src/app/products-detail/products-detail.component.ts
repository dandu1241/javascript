import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  constructor(public ar:ActivatedRoute) { }
  productTitle:any;
  productCategory:any;
  producyDescription:any;
  productImage:any;
  productPrice:any;
  products:any;
  ngOnInit(): void {
    this.ar.params.subscribe((params)=>{
      console.log(params);
      this.productTitle = params['ptitle'];
      this.productCategory = params['category']
    })
    this.ar.queryParams.subscribe((products)=>{
      console.log(products);
      this.products = products;
    })
  }

}
