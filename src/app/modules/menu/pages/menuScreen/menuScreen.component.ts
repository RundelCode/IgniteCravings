import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menuScreen.component.html',
  styleUrls: ['./menuScreen.component.css']
})
export class menuScreenComponent {
  restaurantImage: string = "../../../../../assets/cookies/Nocciola Cookie FOTO.png"
  restaurantName: string = "Nocciola Cookie"
  
  constructor() { }

}
