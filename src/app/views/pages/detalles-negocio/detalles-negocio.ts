import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Importamos MatIcon si vas a pintar los logos de los servicios
import { MatIconModule } from '@angular/material/icon';

import { cardDT } from '../../../interfaces/productoDT.interface';
import { negociosDetalle } from '../../../data/datosDT';

@Component({
  selector: 'app-detalles-negocio',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule], // <-- Añadido aquí
  templateUrl: './detalles-negocio.html',
  styleUrls: ['./detalles-negocio.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetallesNegocio {
  public id = input<string | undefined>();

  public businessDetails = computed<cardDT | undefined>(() => {
    const currentId = this.id();
    if (!currentId) return undefined;
    return negociosDetalle.find(b => String(b.id) === String(currentId));
  });
}