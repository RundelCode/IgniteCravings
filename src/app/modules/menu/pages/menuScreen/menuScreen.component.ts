import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-menu',
  templateUrl: './menuScreen.component.html',
  styleUrls: ['./menuScreen.component.css']
})
export class menuScreenComponent {
  APIURL: string = "https://ignitecravingsb.onrender.com/"
  
  constructor(private http: HttpClient) { }

  getProducts() {
    console.log("Iniciando solicitud de productos...");
    this.http.get<any>(this.APIURL + "productos").subscribe(
      response => {
        console.log("Respuesta recibida:", response);
        // Aquí puedes realizar operaciones con los datos recibidos
      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Error del cliente
          console.error("Error del cliente:", error.error.message);
        } else {
          // Error del servidor
          console.error("Error del servidor:", error.status, error.statusText);
        }
      }
    );
  }

}
