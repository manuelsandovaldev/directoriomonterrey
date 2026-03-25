import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { negocios } from '../../../data/datos'; // Importamos los datos directamente

@Component({
  selector: 'app-detalle-negocio',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './detalle-negocio.html',
  styleUrls: ['./detalle-negocio.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalleNegocio {
  private route = inject(ActivatedRoute);

  private negocioId = signal(this.route.snapshot.paramMap.get('id'));

  
  public negocio = computed(() => 
    negocios.find(n => n.id === this.negocioId())
  );

}
