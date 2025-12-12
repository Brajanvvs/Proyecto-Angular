import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root',
})
export class Productos {

  private productos: Producto[] = [
    { id: 1, nombre: 'Camisa de algodón', precio: 25.99, imagen: 'random.jpg', categoria: 'Ropa' },
    { id: 2, nombre: 'Pantalón jeans', precio: 45.00, imagen: 'random.jpg', categoria: 'Ropa' },
    { id: 3, nombre: 'Sudadera con capucha', precio: 50.00, imagen: 'random.jpg', categoria: 'Ropa' },
    { id: 4, nombre: 'Vestido casual', precio: 40.00, imagen: 'random.jpg', categoria: 'Ropa' },
    { id: 5, nombre: 'Chaleco de punto', precio: 27.40, imagen: 'random.jpg', categoria: 'Ropa' },

    { id: 6, nombre: 'Zapatillas deportivas', precio: 60.50, imagen: 'random.jpg', categoria: 'Calzado' },
    { id: 7, nombre: 'Sandalias de verano', precio: 35.50, imagen: 'random.jpg', categoria: 'Calzado' },
    { id: 8, nombre: 'Zapatos de vestir', precio: 95.00, imagen: 'random.jpg', categoria: 'Calzado' },

    { id: 9, nombre: 'Celular', precio: 15.75, imagen: 'random.jpg', categoria: 'Electrónica' },
    { id: 10, nombre: 'Computador', precio: 120.00, imagen: 'random.jpg', categoria: 'Electrónica' },
    { id: 11, nombre: 'Reloj analógico', precio: 80.00, imagen: 'random.jpg', categoria: 'Electrónica' },

    { id: 12, nombre: 'Bolso de mano', precio: 55.25, imagen: 'random.jpg', categoria: 'Accesorios' },
    { id: 13, nombre: 'Cinturón de cuero', precio: 22.00, imagen: 'random.jpg', categoria: 'Accesorios' },
    { id: 14, nombre: 'Sombrero de playa', precio: 20.00, imagen: 'random.jpg', categoria: 'Accesorios' },
    { id: 15, nombre: 'Bufanda de lana', precio: 18.90, imagen: 'random.jpg', categoria: 'Accesorios' },
    { id: 16, nombre: 'Mochila escolar', precio: 42.30, imagen: 'random.jpg', categoria: 'Accesorios' }
  ];

  constructor() { }

  getProductos() {
    return this.productos;
  }

  agregarProducto(producto: Producto) {
    const nuevo: Producto = {
      ...producto,
      id: this.productos.length + 1 // reemplazar luego por UUID
    };

    this.productos = [nuevo, ...this.productos];
    return nuevo;
  }
  
}
