import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements AfterViewInit {

ngAfterViewInit() {
  const carrusel = document.querySelector('.preview-carousel') as HTMLElement;

  if (!carrusel) return;

  setInterval(() => {
    carrusel.scrollBy({
      left: 230, 
      behavior: 'smooth'
    });

    if (carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth) {
      carrusel.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 2000);
}


}
