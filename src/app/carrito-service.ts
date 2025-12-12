import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  private carrito: Producto[] = [];

  constructor() {}

  getCarrito() {
    return this.carrito;
  }

  estaEnCarrito(prod: Producto): boolean {
    return this.carrito.some(p => p.id === prod.id);
  }

  toggleCarrito(prod: Producto) {
    if (this.estaEnCarrito(prod)) {
      this.carrito = this.carrito.filter(p => p.id !== prod.id);
    } else {
      this.carrito.push(prod);
    }
  }

  limpiarCarrito() {
    this.carrito = [];
  }

  obtenerTotal() {
    return this.carrito.reduce((total, p) => total + p.precio, 0);
  }
  
}
