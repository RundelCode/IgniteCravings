import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  currentPage: string = "";

  constructor(private Router: Router) { }

  navigateToCategory(){}

}
