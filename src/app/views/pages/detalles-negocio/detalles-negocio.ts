import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// --- Interfaces y Datos ---
import { cardDT } from '../../../interfaces/productoDT.interface';
import { negociosDetalle } from '../../../data/datosDT';

@Component({
  selector: 'app-detalles-negocio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalles-negocio.html',
  styleUrls: ['./detalles-negocio.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetallesNegocio {

  // 1. Recibe el ID de la URL automáticamente gracias a Angular (Signal Input)
  public id = input<string | undefined>();

  // 2. Computed de Google: Busca el negocio solo cuando el id() cambia. ¡Ultra eficiente!
  public businessDetails = computed<cardDT | undefined>(() => {
    const currentId = this.id();
    if (!currentId) return undefined;

    // Buscamos el negocio convirtiendo a String para que no falle
    return negociosDetalle.find(b => String(b.id) === String(currentId));
  });
}