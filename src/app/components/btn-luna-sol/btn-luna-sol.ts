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


  

  theme = signal<Theme>('dark'); // Tema predeterminado

  private _document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      if (this.theme() === 'light') { // Si el tema es light
        this._document.documentElement.classList.add('light'); // Agregar clase 'light'
      } else { // Si el tema es dark
        this._document.documentElement.classList.remove('light'); // Quitar clase 'light'
      }
    });
  }

  toggleTheme() { 
    this.theme.update((value) => { 
      return value === 'light' ? 'dark' : 'light';
    });
  }
}