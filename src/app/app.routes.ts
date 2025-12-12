import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';
import { Component } from '@angular/core';


export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'contacto', component: Contacto},
    {path: 'footer', component: Footer},

    { path: '', redirectTo: 'home', pathMatch: 'full' },


];
