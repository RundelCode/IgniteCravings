import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menuScreen.component.html',
  styleUrls: ['./menuScreen.component.css']
})
export class menuScreenComponent {
  restaurantImage: string = "s3://ignitecravings-elbuensabor-colombia/Entrantes/664bc8c6812cff3f2c837014.mov"
  restaurantName: string = "Nocciola Cookie"
  
  constructor() { }

}
