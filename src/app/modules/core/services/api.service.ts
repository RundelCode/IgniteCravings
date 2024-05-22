import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class APIService {
  APIURL: string = "https://ignitecravingsb.onrender.com/"


  constructor(private http: HttpClient) { }

  getProductsTest() {
    return [
      {
        "_id": "664bc8c6812cff3f2c837014",
        "nombre": "Producto 1 de Entrantes",
        "precio": 10.5,
        "descripcion": "Descripción del producto 1 de Entrantes",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837015",
        "nombre": "Producto 2 de Entrantes",
        "precio": 12,
        "descripcion": "Descripción del producto 2 de Entrantes",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837016",
        "nombre": "Producto 3 de Entrantes",
        "precio": 8,
        "descripcion": "Descripción del producto 3 de Entrantes",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837017",
        "nombre": "Producto 4 de Entrantes",
        "precio": 15,
        "descripcion": "Descripción del producto 4 de Entrantes",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837018",
        "nombre": "Producto 5 de Entrantes",
        "precio": 9.5,
        "descripcion": "Descripción del producto 5 de Entrantes",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837019",
        "nombre": "Producto 1 de Platos Principales",
        "precio": 10.5,
        "descripcion": "Descripción del producto 1 de Platos Principales",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c83701a",
        "nombre": "Producto 2 de Platos Principales",
        "precio": 12,
        "descripcion": "Descripción del producto 2 de Platos Principales",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c83701b",
        "nombre": "Producto 3 de Platos Principales",
        "precio": 8,
        "descripcion": "Descripción del producto 3 de Platos Principales",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c83701c",
        "nombre": "Producto 4 de Platos Principales",
        "precio": 15,
        "descripcion": "Descripción del producto 4 de Platos Principales",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c83701d",
        "nombre": "Producto 5 de Platos Principales",
        "precio": 9.5,
        "descripcion": "Descripción del producto 5 de Platos Principales",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c83701e",
        "nombre": "Producto 1 de Postres",
        "precio": 10.5,
        "descripcion": "Descripción del producto 1 de Postres",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c83701f",
        "nombre": "Producto 2 de Postres",
        "precio": 12,
        "descripcion": "Descripción del producto 2 de Postres",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837020",
        "nombre": "Producto 3 de Postres",
        "precio": 8,
        "descripcion": "Descripción del producto 3 de Postres",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837021",
        "nombre": "Producto 4 de Postres",
        "precio": 15,
        "descripcion": "Descripción del producto 4 de Postres",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837022",
        "nombre": "Producto 5 de Postres",
        "precio": 9.5,
        "descripcion": "Descripción del producto 5 de Postres",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837023",
        "nombre": "Producto 1 de Bebidas",
        "precio": 10.5,
        "descripcion": "Descripción del producto 1 de Bebidas",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837024",
        "nombre": "Producto 2 de Bebidas",
        "precio": 12,
        "descripcion": "Descripción del producto 2 de Bebidas",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837025",
        "nombre": "Producto 3 de Bebidas",
        "precio": 8,
        "descripcion": "Descripción del producto 3 de Bebidas",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837026",
        "nombre": "Producto 4 de Bebidas",
        "precio": 15,
        "descripcion": "Descripción del producto 4 de Bebidas",
        "alergenos": []
      },
      {
        "_id": "664bc8c6812cff3f2c837027",
        "nombre": "Producto 5 de Bebidas",
        "precio": 9.5,
        "descripcion": "Descripción del producto 5 de Bebidas",
        "alergenos": []
      }
    ]

  }
  getProducts() {
    console.log("Iniciando solicitud de productos...");
    this.http.get<any>(this.APIURL + "productos").subscribe(
      response => {
        console.log("Respuesta recibida:", response);
        return response;
      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.error("Error del cliente:", error.error.message);
        } else {
          console.error("Error del servidor:", error.status, error.statusText);
        }
      }
    );
  }

  getCategoriesTest() {
    const categorias = [
      {
        id: "664bc8c6812cff3f2c83700c",
        createdAt: "2024-05-20T22:03:52.285Z",
        descripcion: "Deliciosos entrantes para abrir el apetito",
        estaActivo: true,
        imagen: "url_a_la_imagen_de_entrantes.jpg",
        indice: 1,
        nombre: "Entrantes",
        restauranteId: "664bc8c6812cff3f2c83700a",
        updatedAt: "2024-05-20T22:03:52.285Z",
        __v: 0
      },
      {
        id: "664bc8c6812cff3f2c83700d",
        createdAt: "2024-05-20T22:03:52.285Z",
        descripcion: "Nuestros platos principales",
        estaActivo: true,
        imagen: "url_a_la_imagen_de_platos_principales.jpg",
        indice: 2,
        nombre: "Platos Principales",
        restauranteId: "664bc8c6812cff3f2c83700a",
        updatedAt: "2024-05-20T22:03:52.285Z",
        __v: 0
      },
      {
        id: "664bc8c6812cff3f2c83700e",
        createdAt: "2024-05-20T22:03:52.285Z",
        descripcion: "Postres deliciosos",
        estaActivo: true,
        imagen: "url_a_la_imagen_de_postres.jpg",
        indice: 3,
        nombre: "Postres",
        restauranteId: "664bc8c6812cff3f2c83700a",
        updatedAt: "2024-05-20T22:03:52.285Z",
        __v: 0
      },
      {
        id: "664bc8c6812cff3f2c83700f",
        createdAt: "2024-05-20T22:03:52.285Z",
        descripcion: "Variedad de bebidas",
        estaActivo: true,
        imagen: "url_a_la_imagen_de_bebidas.jpg",
        indice: 4,
        nombre: "Bebidas",
        restauranteId: "664bc8c6812cff3f2c83700a",
        updatedAt: "2024-05-20T22:03:52.285Z",
        __v: 0
      }
    ];

    return categorias;
  }

}
