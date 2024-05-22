import { Component, OnInit } from '@angular/core';
import { APIService } from '../../core/services/api.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  producto ={
    image: "../../../../assets/cookies/Nocciola Cookie FOTO.png",
  }
  productList: any;
  productList1: any;

  constructor(private apiService: APIService){}

  ngOnInit(): void {
    this.productList = this.apiService.getProductsTest();
  }

  test(){
    this.apiService.getProducts();
  }

}
