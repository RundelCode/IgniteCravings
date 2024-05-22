import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryScreenComponent } from './pages/category-screen/category-screen.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CategoryScreenComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CategoryScreenComponent,
  ]
})
export class CategoryModule { }
