// header.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule]
})
export class HeaderComponent {
  
  // 💡 Esta es la clave: Define el evento que el componente principal escuchará.
  @Output() toggleMenu = new EventEmitter<void>();

  // ... (otros métodos si los hay)
}