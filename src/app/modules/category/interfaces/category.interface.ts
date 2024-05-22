export interface Category {
  _id: string;
  nombre: string;
}

export interface Product {
  _id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  alergenos: string[];
  imagen: string;
  categoriaId: Category;
  restauranteId: {
    _id: string;
    nombre: string;
  };
  indice: number;
  estaActivo: boolean;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
