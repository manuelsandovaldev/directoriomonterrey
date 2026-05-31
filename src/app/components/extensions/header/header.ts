// header.component.ts
import { Component, Output, EventEmitter, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { BtnLunaSol } from '../btn-luna-sol/btn-luna-sol';
import { ShareBtnComponent } from '../share-btn/share-btn';
import { BtnBack } from '../btn-back/btn-back';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, BtnLunaSol, ShareBtnComponent, BtnBack]
})
export class HeaderComponent {
  private router = inject(Router);

  public showBackButton = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.router.url.includes('/detalles-negocio'))
    ),
    { initialValue: this.router.url.includes('/detalles-negocio') }
  );

  @Output() toggleMenu = new EventEmitter<void>();
}