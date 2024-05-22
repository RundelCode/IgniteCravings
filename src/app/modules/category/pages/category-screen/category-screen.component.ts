import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/modules/core/services/api.service';
import { Product } from 'src/app/modules/category/interfaces/category.interface';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'category-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.css']
})
export class CategoryScreenComponent implements OnInit{

  categoryId: string = '664bc8c6812cff3f2c83700c';
  categoryName: string = '';
  productList: Product[] = [];


  producto ={
    image: "../../../../assets/cookies/Nocciola Cookie FOTO.png",
  }


  constructor(
    private apiService: APIService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
      this.loadProducts();
  }


  loadProducts(): void {
    this.apiService.getProductsTest();
    setTimeout(() => {
      this.productList = this.apiService.getProductsBycategoryTest(this.categoryId);
      console.log("Productos filtrados:", this.productList);
    }, 1000);
  }

  //I need to get the category name from the API
  categoryNameFunciton(): void {
    this.categoryName = this.apiService.getCategoryName(this.categoryId);
    console.log("Nombre de la categoría:", this.categoryName);
  }


  test(){
    alert("Redirección")
  }
}




