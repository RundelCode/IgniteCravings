import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  actual = "home";
  
  allCategories = {
    categoryId: "1",
    categoryName: "Name",
    categoryIcon: "../../../../assets/Icons/homeIcon.png"
  }
  categories = [
    {
      categoryId: "1",
      categoryName: "name",
      categoryIcon: "../../../../assets/Icons/pizza.svg"
    },
    {
      categoryId: "1",
      categoryName: "name",
      categoryIcon: "../../../../assets/Icons/wineglass.svg"
    },
    {
      categoryId: "1",
      categoryName: "name",
      categoryIcon: "../../../../assets/Icons/beer.svg"
    },
    {
      categoryId: "1",
      categoryName: "name",
      categoryIcon: "../../../../assets/Icons/shrimp.svg"
    },
    {
      categoryId: "1",
      categoryName: "name",
      categoryIcon: "../../../../assets/Icons/bbq.svg"
    },   
     
  ]

}
