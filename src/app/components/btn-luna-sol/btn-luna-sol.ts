import { Component, DOCUMENT, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export type Theme = 'light' | 'dark';

@Component({
  selector: 'app-btn-luna-sol',
  imports: [ MatButtonModule, MatIconModule ],
  templateUrl: './btn-luna-sol.html',
  styleUrl: './btn-luna-sol.css',
})
export class BtnLunaSol {


  

  theme = signal<Theme>('dark'); // el tema predeterminado sera dark (oscuro),

  private _document = inject(DOCUMENT); // crea una variable privada llamada "_document" y sera igual al valor de "DOCUMENT" un elemento de "angular core",

  constructor() { // lo que hace la funcion effect es que se ejecuta inmediatamente y despues de que el signal sea leido, entonces lo que dice es que si el tema es igual a "ligth" va a agregar la clase "light" al <html>, si el tema no es igual a "light" se quitara la clase "light" del <html>.  
    effect(() => {
      if (this.theme() === 'light') { // Si el tema es light
        this._document.documentElement.classList.add('light'); // Agregar clase 'light'
      } else { // Si el tema es dark
        this._document.documentElement.classList.remove('light'); // Quitar clase 'light'
      }
    });
  }

  toggleTheme() { // al hace clik en el boton del html se ejecuta esta funcion que lo que hace es que si el tema es igual a "light" se va a cambiar a "dark" y si no es igual a "light" se va a cambiar a "light".
    this.theme.update((value) => { 
      return value === 'light' ? 'dark' : 'light';
    });
  }
}