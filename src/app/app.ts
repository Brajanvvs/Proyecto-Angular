import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { Menu } from "./components/menu/menu";
import { Footer } from "./components/footer/footer";
import { Whatsapp } from "./components/whatsapp/whatsapp";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ProductosComponent, Menu, Footer, Whatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-principal');
}
