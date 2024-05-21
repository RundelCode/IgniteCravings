import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-menu',
  templateUrl: './menuScreen.component.html',
  styleUrls: ['./menuScreen.component.css']
})
export class menuScreenComponent {
  APIURL: string = "https://ignitecravingsb.onrender.com/"
  
  constructor(private http: HttpClient) { }

  getproducts(){
    this.http.get<any>(this.APIURL+"productos").subscribe(
      response=>{
        console.log(response)
      }
    )

  }

}
