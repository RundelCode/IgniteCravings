import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class APIService {
  APIURL: string = "https://ignitecravingsb.onrender.com/"


  constructor(private http: HttpClient) { }

  getProductsTest() {
    const productos = [
      {
        alergenos: ['lacteos'],
        categoriaId: {_id: '664bc8c6812cff3f2c83700c', nombre: 'Entrantes'},
        createdAt: "2024-05-20T22:03:52.491Z",
        descripcion: "Descripción del producto 1 de Entrantes",
        estaActivo: true,
        imagen: "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837014.mp4",
        indice: 1,
        nombre: "Producto 1 de Entrantes",
        precio: 10.5,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.491Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c837014"
      },
      {
        alergenos: ['lacteos', 'nueces'],
        categoriaId: {_id: '664bc8c6812cff3f2c83700c', nombre: 'Entrantes'},
        createdAt: "2024-05-20T22:03:52.491Z",
        descripcion: "Descripción del producto 2 de Entrantes",
        estaActivo: true,
        imagen: "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837015.mp4",
        indice: 2,
        nombre: "Producto 2 de Entrantes",
        precio: 12,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.491Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c837015"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700c', nombre: 'Entrantes'},
        createdAt: "2024-05-20T22:03:52.491Z",
        descripcion: "Descripción del producto 3 de Entrantes",
        estaActivo: true,
        imagen: "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837016.mp4",
        indice: 3,
        nombre: "Producto 3 de Entrantes",
        precio: 8,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.491Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c837016"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700c', nombre: 'Entrantes'},
        createdAt: "2024-05-20T22:03:52.491Z",
        descripcion: "Descripción del producto 4 de Entrantes",
        estaActivo: true,
        imagen: "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837017.mp4",
        indice: 4,
        nombre: "Producto 4 de Entrantes",
        precio: 15,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.491Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c837017"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700c', nombre: 'Entrantes'},
        createdAt: "2024-05-20T22:03:52.491Z",
        descripcion: "Descripción del producto 5 de Entrantes",
        estaActivo: true,
        imagen: "https://ignitecravings-elbuensabor-colombia.s3.amazonaws.com/Entrantes/664bc8c6812cff3f2c837018.mp4",
        indice: 5,
        nombre: "Producto 5 de Entrantes",
        precio: 9.5,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.491Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c837018"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700d', nombre: 'Platos Principales'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 1 de Platos Principales",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto1.jpg",
        indice: 1,
        nombre: "Producto 1 de Platos Principales",
        precio: 10.5,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c837019"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700d', nombre: 'Platos Principales'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 2 de Platos Principales",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto2.jpg",
        indice: 2,
        nombre: "Producto 2 de Platos Principales",
        precio: 12,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c83701a"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700d', nombre: 'Platos Principales'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 3 de Platos Principales",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto3.jpg",
        indice: 3,
        nombre: "Producto 3 de Platos Principales",
        precio: 8,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c83701b"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700d', nombre: 'Platos Principales'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 4 de Platos Principales",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto4.jpg",
        indice: 4,
        nombre: "Producto 4 de Platos Principales",
        precio: 15,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c83701c"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700d', nombre: 'Platos Principales'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 5 de Platos Principales",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto5.jpg",
        indice: 5,
        nombre: "Producto 5 de Platos Principales",
        precio: 9.5,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c83701d"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700e', nombre: 'Postres'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 1 de Postres",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto1.jpg",
        indice: 1,
        nombre: "Producto 1 de Postres",
        precio: 10.5,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c83701e"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700e', nombre: 'Postres'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 2 de Postres",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto2.jpg",
        indice: 2,
        nombre: "Producto 2 de Postres",
        precio: 12,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c83701f"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700e', nombre: 'Postres'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 3 de Postres",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto3.jpg",
        indice: 3,
        nombre: "Producto 3 de Postres",
        precio: 8,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c837020"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700e', nombre: 'Postres'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 4 de Postres",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto4.jpg",
        indice: 4,
        nombre: "Producto 4 de Postres",
        precio: 15,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c837021"
      },
      {
        alergenos: [],
        categoriaId: {_id: '664bc8c6812cff3f2c83700e', nombre: 'Postres'},
        createdAt: "2024-05-20T22:03:52.492Z",
        descripcion: "Descripción del producto 5 de Postres",
        estaActivo: true,
        imagen: "url_a_la_imagen_del_producto5.jpg",
        indice: 5,
        nombre: "Producto 5 de Postres",
        precio: 9.5,
        restauranteId: {_id: '664bc8c6812cff3f2c83700a', nombre: 'El Buen Sabor'},
        updatedAt: "2024-05-20T22:03:52.492Z",
        __v: 0,
        _id: "664bc8c6812cff3f2c837022"
      }
    ];
    return productos;

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
