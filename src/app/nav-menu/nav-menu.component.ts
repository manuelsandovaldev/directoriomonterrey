// nav-menu.component.ts
import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/extensions/header/header';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    //AsyncPipe,
    RouterOutlet,
    RouterLink,
    HeaderComponent // <--- Añadido a los imports para que pueda ser usado en el HTML
  ]
})
export class NavMenuComponent {
  private breakpointObserver = inject(BreakpointObserver);

  // La propiedad isHandset$ se mantiene por si la necesitas más adelante, 
  // aunque el layout ya no depende de ella.
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}