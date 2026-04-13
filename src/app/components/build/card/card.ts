
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { cardInterface } from '../../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  // Se elimina MatDialogModule de los imports
  imports: [MatCardModule, MatButtonModule, FontAwesomeModule, MatIconModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  // ENTRADA: Recibe los datos del negocio. Esto no se ha cambiado.
  public conector = input.required<cardInterface>();

  // SALIDA: Creamos un emisor que notificará el ID (string) del negocio.
  public cardClick = output<string>();

  // Iconos de redes sociales. Esto no cambia.
  public faInstagram = faInstagram;
  public faFacebook = faFacebook;

  // El constructor ahora está limpio, ya no necesita 'MatDialog'.
  constructor() {}

  // Esta es la NUEVA función que se llamará desde el botón en el HTML.
  public onCardClick(): void {
    // Cuando se llama, emite el ID del negocio para que el componente padre pueda escucharlo.
    this.cardClick.emit(this.conector().id);
  }
}
