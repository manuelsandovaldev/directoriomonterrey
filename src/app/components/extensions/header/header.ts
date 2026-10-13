// header.component.ts
import { Component, inject, ChangeDetectionStrategy, computed, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { BtnLunaSol } from '../btn-luna-sol/btn-luna-sol';
import { ShareBtnComponent } from '../share-btn/share-btn';
import { BtnBack } from '../btn-back/btn-back';
import { LayoutService } from '../../../global/state/layout.service';

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
  public layout = inject(LayoutService);

  public showBackButton = computed(() => {
    this.router.lastSuccessfulNavigation();
    return this.router.url.includes('/detalles-negocio');
  });

  public toggleMenu = output<void>();
}