import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { negocios } from '../../../data/datos';
import { Card } from '../../../components/build/card/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CategoriasEnum } from '../../../enums/categorias.enum';

@Component({
  selector: 'app-locals',
  imports: [Card, MatTabsModule],
  templateUrl: './locals.html',
  styleUrl: './locals.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalsComponent {
    public locals = signal(negocios);
    public categorias = signal(Object.values(CategoriasEnum));
    private router = inject(Router);

    public localsByCategory = computed(() => {
      const allLocals = this.locals();
      const grouped: Record<string, typeof allLocals> = {};
      grouped['Todos'] = allLocals;
      for (const cat of this.categorias()) {
        const filtered = allLocals.filter(local => local.categoria === cat);
        if (filtered.length > 0) {
          grouped[cat] = filtered;
        }
      }
      return grouped;
    });

    public categoriasActivas = computed(() => {
      return Object.keys(this.localsByCategory());
    });

    // Esta función se llamará cuando una tarjeta emita el evento (cardClick)
    public onCardClicked(id: string): void {
      // Navega a la ruta de detalles, pasando el ID del negocio
      this.router.navigate(['/detalles-negocio', id]);
    }
}
