import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
