import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../category/interfaces/category.interface';



@Injectable({
  providedIn: 'root'
})
export class APIService {
  APIURL: string = "https://ignitecravingsb.onrender.com/"

  private products: Product[] = []

  constructor(private http: HttpClient) { }

  getProductsTest() {
    return [
      {
          "_id": "664bc8c6812cff3f2c837014",
          "nombre": "Producto 1 de Entrantes",
          "precio": 10.5,
          "descripcion": "Descripción del producto 1 de Entrantes",
          "alergenos": [
              "lacteos"
          ],
          "imagen": "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837014.mp4",
          "categoriaId": {
              "_id": "664bc8c6812cff3f2c83700c",
              "nombre": "Entrantes"
          },
          "restauranteId": {
              "_id": "664bc8c6812cff3f2c83700a",
              "nombre": "El Buen Sabor"
          },
          "indice": 1,
          "estaActivo": true,
          "__v": 0,
          "createdAt": "2024-05-20T22:03:52.491Z",
          "updatedAt": "2024-05-20T22:03:52.491Z"
      },
      {
          "_id": "664bc8c6812cff3f2c837015",
          "nombre": "Producto 2 de Entrantes",
          "precio": 12,
          "descripcion": "Descripción del producto 2 de Entrantes",
          "alergenos": [
              "lacteos",
              "nueces"
          ],
          "imagen": "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837015.mp4",
          "categoriaId": {
              "_id": "664bc8c6812cff3f2c83700c",
              "nombre": "Entrantes"
          },
          "restauranteId": {
              "_id": "664bc8c6812cff3f2c83700a",
              "nombre": "El Buen Sabor"
          },
          "indice": 2,
          "estaActivo": true,
          "__v": 0,
          "createdAt": "2024-05-20T22:03:52.491Z",
          "updatedAt": "2024-05-20T22:03:52.491Z"
      },
      {
          "_id": "664bc8c6812cff3f2c837016",
          "nombre": "Producto 3 de Entrantes",
          "precio": 8,
          "descripcion": "Descripción del producto 3 de Entrantes",
          "alergenos": [],
          "imagen": "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837016.mp4",
          "categoriaId": {
              "_id": "664bc8c6812cff3f2c83700c",
              "nombre": "Entrantes"
          },
          "restauranteId": {
              "_id": "664bc8c6812cff3f2c83700a",
              "nombre": "El Buen Sabor"
          },
          "indice": 3,
          "estaActivo": true,
          "__v": 0,
          "createdAt": "2024-05-20T22:03:52.491Z",
          "updatedAt": "2024-05-20T22:03:52.491Z"
      },
      {
          "_id": "664bc8c6812cff3f2c837017",
          "nombre": "Producto 4 de Entrantes",
          "precio": 15,
          "descripcion": "Descripción del producto 4 de Entrantes",
          "alergenos": [],
          "imagen": "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837017.mp4",
          "categoriaId": {
              "_id": "664bc8c6812cff3f2c83700c",
              "nombre": "Entrantes"
          },
          "restauranteId": {
              "_id": "664bc8c6812cff3f2c83700a",
              "nombre": "El Buen Sabor"
          },
          "indice": 4,
          "estaActivo": true,
          "__v": 0,
          "createdAt": "2024-05-20T22:03:52.491Z",
          "updatedAt": "2024-05-20T22:03:52.491Z"
      },
      {
          "_id": "664bc8c6812cff3f2c837018",
          "nombre": "Producto 5 de Entrantes",
          "precio": 9.5,
          "descripcion": "Descripción del producto 5 de Entrantes",
          "alergenos": [],
          "imagen": "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837018.mp4",
          "categoriaId": {
              "_id": "664bc8c6812cff3f2c83700c",
              "nombre": "Entrantes"
          },
          "restauranteId": {
              "_id": "664bc8c6812cff3f2c83700a",
              "nombre": "El Buen Sabor"
          },
          "indice": 5,
          "estaActivo": true,
          "__v": 0,
          "createdAt": "2024-05-20T22:03:52.491Z",
          "updatedAt": "2024-05-20T22:03:52.491Z"
      },
      {
          "_id": "664bc8c6812cff3f2c837019",
          "nombre": "Producto 1 de Platos Principales",
          "precio": 10.5,
          "descripcion": "Descripción del producto 1 de Platos Principales",
          "alergenos": [],
          "imagen": "url_a_la_imagen_del_producto1.jpg",
          "categoriaId": {
              "_id": "664bc8c6812cff3f2c83700d",
              "nombre": "Platos Principales"
          },
          "restauranteId": {
              "_id": "664bc8c6812cff3f2c83700a",
              "nombre": "El Buen Sabor"
          },
          "indice": 1,
          "estaActivo": true,
          "__v": 0,
          "createdAt": "2024-05-20T22:03:52.492Z",
          "updatedAt": "2024-05-20T22:03:52.492Z"
      },
      {
          "_id": "664bc8c6812cff3f2c83701a",
          "nombre": "Producto 2 de Platos Principales",
          "precio": 12,
          "descripcion": "Descripción del producto 2 de Platos Principales",
          "alergenos": [],
          "imagen": "url_a_la_imagen_del_producto2.jpg",
          "categoriaId": {
              "_id": "664bc8c6812cff3f2c83700d",
              "nombre": "Platos Principales"
          },
          "restauranteId": {
              "_id": "664bc8c6812cff3f2c83700a",
              "nombre": "El Buen Sabor"
          },
          "indice": 2,
          "estaActivo": true,
          "__v": 0,
          "createdAt": "2024-05-20T22:03:52.492Z",
          "updatedAt": "2024-05-20T22:03:52.492Z"
      },
      {
          "_id": "664bc8c6812cff3f2c83701b",
          "nombre": "Producto 3 de Platos Principales",
          "precio": 8,
          "descripcion": "Descripción del producto 3 de Platos Principales",
          "alergenos": [],
          "imagen": "url_a_la_imagen_del_producto3.jpg",
          "categoriaId": {
              "_id": "664bc8c6812cff3f2c83700d",
              "nombre": "Platos Principales"
          },
          "restauranteId": {
              "_id": "664bc8c6812cff3f2c83700a",
              "nombre": "El Buen Sabor"
          },
          "indice": 3,
          "estaActivo": true,
          "__v": 0,
          "createdAt": "2024-05-20T22:03:52.492Z",
          "updatedAt": "2024-05-20T22:03:52.492Z"
      },
      {
          "_id": "664bc8c6812cff3f2c83701c",
          "nombre": "Producto 4 de Platos Principales",
          "precio": 15,
          "descripcion": "Descripción del producto 4 de Platos Principales",
          "alergenos": [],
          "imagen": "url_a_la_imagen_del_producto4.jpg",
          "categoriaId": {
              "_id": "664bc8c6812cff3f2c83700d",
              "nombre": "Platos Principales"
          },
          "restauranteId": {
              "_id": "664bc8c6812cff3f2c83700a",
              "nombre": "El Buen Sabor"
          },
          "indice": 4,
          "estaActivo": true,
          "__v": 0,
          "createdAt": "2024-05-20T22:03:52.492Z",
          "updatedAt": "2024-05-20T22:03:52.492Z"
      }
    ]

  }

  getProductsBycategoryTest(categoryId: string) {
    return this.getProductsTest().filter(product => product.categoriaId._id === categoryId);
  }



  getProducts() {
    console.log("Iniciando solicitud de productos...");
    this.http.get<Product[]>(this.APIURL + "productos").subscribe(
      response => {
        console.log("Respuesta recibida:", response);
        this.products = response;
        return this.products;
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

  getProductsByCategory(categoryId: string): Product[] {
    return this.products.filter(product => product.categoriaId._id === categoryId);
  }

  getCategoryName(categoryId: string): string {
    const productWithCategory = this.products.find(product => product.categoriaId?._id === categoryId);
    if (productWithCategory && productWithCategory.categoriaId) {
      return productWithCategory.categoriaId.nombre;
    } else {
      return "Categoría no encontrada";
    }
  }

}







