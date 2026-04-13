
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

// --- Font Awesome --- 
// 1. Importamos el módulo principal para renderizar iconos.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// 2. Importamos el icono específico que queremos usar.
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-back',
  standalone: true, 
  // 3. Añadimos FontAwesomeModule a los imports.
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './btn-back.html',
  styleUrls: ['./btn-back.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnBack {
  private location = inject(Location);

  // 4. Creamos una propiedad pública para que la plantilla la pueda usar.
  public icon = faArrowLeft;

  goBack(): void {
    this.location.back();
  }
}
