import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashService } from '../../services/splash.service';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.css']
})
export class LoadPageComponent implements OnInit {

  constructor(private router: Router, private splashService: SplashService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.splashService.hideSplashScreen();
      this.router.navigate(['/menu']);
    }, 3000);
  }
}
