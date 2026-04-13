
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { negocios } from '../../../data/datos';
import { Card } from '../../../components/build/card/card';

@Component({
  selector: 'app-locals',
  standalone: true,
  imports: [Card],
  templateUrl: './locals.html',
  styleUrl: './locals.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalsComponent {
    public locals = signal(negocios);
    private router = inject(Router);

    // Esta función se llamará cuando una tarjeta emita el evento (cardClick)
    public onCardClicked(id: string): void {
      // Navega a la ruta de detalles, pasando el ID del negocio
      this.router.navigate(['/detalles-negocio', id]);
    }
}
