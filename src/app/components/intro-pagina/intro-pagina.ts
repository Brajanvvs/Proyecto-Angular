import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-pagina',
  imports: [],
  templateUrl: './intro-pagina.html',
  styleUrl: './intro-pagina.css',
})
export class IntroPagina {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']);
  }

}
