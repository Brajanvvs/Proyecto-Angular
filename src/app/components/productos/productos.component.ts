import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DecimalPipe } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Productos } from '../../productos';
import { Producto } from '../../producto';
import { CarritoService } from '../../carrito-service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink, DecimalPipe, FormsModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css'],
})

export class ProductosComponent implements OnInit {

  filtro: string = '';
  filtroCategoria: string = '';
  carrito: Producto[] = [];
  nuevoProducto: Partial<Producto> = {};


  productos: Producto[] = [];

  mostrarFormulario = false;


  constructor (
    private productoService: Productos,
    private carritoService: CarritoService  
  ){}

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

  get productosFiltrados(): Producto[] {
    return this.productos
      .filter(p => p.nombre.toLowerCase().includes(this.filtro.toLowerCase()))
      .filter(p => this.filtroCategoria ? p.categoria === this.filtroCategoria : true);
  }


  agregarProducto() {
    if (!this.nuevoProducto.nombre || !this.nuevoProducto.precio) {
      alert("Todos los campos son obligatorios");
      return;
    }

    let nuevo = this.productoService.agregarProducto({
      id: 0, // será reemplazado en el servicio
      nombre: this.nuevoProducto.nombre!,
      precio: this.nuevoProducto.precio!,
      imagen: this.nuevoProducto.imagen || 'random.jpg',
      categoria: this.nuevoProducto.categoria || 'Sin categoría'
    });

    // actualizar la lista del componente (opcional si el servicio usa signals más adelante)
    this.productos = this.productoService.getProductos();

    this.nuevoProducto = {};
    this.mostrarFormulario = false;
  }

  estaEnCarrito(prod: Producto): boolean {
    return this.carritoService.estaEnCarrito(prod);
  }

  toggleCarrito(prod: Producto) {
    this.carritoService.toggleCarrito(prod);
    this.carrito = this.carritoService.getCarrito();
  }

  
}
