// header.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BtnLunaSol } from '../btn-luna-sol/btn-luna-sol';
import { ShareBtnComponent } from '../share-btn/share-btn';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, BtnLunaSol, ShareBtnComponent]
})
export class HeaderComponent {
  
  // 💡 Esta es la clave: Define el evento que el componente principal escuchará.
  @Output() toggleMenu = new EventEmitter<void>();

  // ... (otros métodos si los hay)
}