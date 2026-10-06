
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { cardInterface } from '../../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  // Se elimina MatDialogModule de los imports
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  // ENTRADA: Recibe los datos del negocio con un signal. Esto no se ha cambiado.
  public conector = input.required<cardInterface>();

  // SALIDA: Creamos un emisor que notificará el ID (string) del negocio.
  public cardClick = output<string>();

  // Mock property para ver el resultado de abierto/cerrado como se pidió
  public mockIsOpen = Math.random() > 0.5;

  // El constructor ahora está limpio, ya no necesita 'MatDialog'.
  constructor() { }

  // Esta es la NUEVA función que se llamará desde el botón en el HTML.
  public onCardClick(): void {
    // Cuando se llama, emite el ID del negocio para que el componente padre pueda escucharlo.
    this.cardClick.emit(this.conector().id);
  }
}
