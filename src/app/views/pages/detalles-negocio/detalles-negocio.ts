
import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

// --- Interfaces y Datos ---
import { cardDT } from '../../../interfaces/productoDT.interface';
import { negociosDetalle } from '../../../data/datosDT';

// --- COMPONENTE DEL BOTÓN ---
// Importamos nuestro botón reutilizable.
import { BtnBack } from '../../../components/extensions/btn-back/btn-back';

@Component({
  selector: 'app-detalles-negocio',
  standalone: true,
  // Lo añadimos a los imports para poder usar <app-btn-back> en el HTML.
  imports: [CommonModule, RouterModule, BtnBack],
  templateUrl: './detalles-negocio.html',
  styleUrls: ['./detalles-negocio.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetallesNegocio {
  private route = inject(ActivatedRoute);
  public businessDetails = signal<cardDT | undefined>(undefined);

  constructor() {
    const businessId = this.route.snapshot.paramMap.get('id');
    if (businessId) {
      const foundBusiness = negociosDetalle.find(b => b.id === businessId);
      this.businessDetails.set(foundBusiness);
    }
  }
}
