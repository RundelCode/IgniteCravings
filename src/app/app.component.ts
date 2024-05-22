import { Component } from '@angular/core';
import { SplashService } from './modules/splash/services/splash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'igniteCravings';

  constructor(public splashService: SplashService) {}
}
