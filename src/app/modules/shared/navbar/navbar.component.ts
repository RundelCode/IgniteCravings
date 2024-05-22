import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../core/services/navbar.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  currentRoute: string = ""
  allCategories = {
    categoryId: "1",
    categoryName: "pizza",
    categoryIcon: "../../../../assets/Icons/homeIcon.png"
  }
  categories = [
    {
      categoryId: "1",
      categoryName: "pizzas",
      categoryIcon: "../../../../assets/Icons/pizza.svg"
    },
    {
      categoryId: "2",
      categoryName: "cocteles",
      categoryIcon: "../../../../assets/Icons/wineglass.svg"
    },
    {
      categoryId: "3",
      categoryName: "cervezas",
      categoryIcon: "../../../../assets/Icons/beer.svg"
    },
    {
      categoryId: "4",
      categoryName: "marizcos",
      categoryIcon: "../../../../assets/Icons/shrimp.svg"
    },
    {
      categoryId: "5",
      categoryName: "barbacoa",
      categoryIcon: "../../../../assets/Icons/bbq.svg"
    },

  ]

  constructor(private NavbarService: NavbarService, private router: Router) {

  }

  ngOnInit(): void {
    this.currentRoute = this.NavbarService.currentPage;
  }

  isActive(categoryName: string): boolean {
    return this.currentRoute === categoryName;
  }

  navigateToCategory(categoryName: string): void {
    this.NavbarService.currentPage = categoryName;
    this.router.navigate(['/slider']);
  }
}
