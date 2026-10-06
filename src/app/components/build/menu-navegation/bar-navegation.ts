import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LayoutService } from '../../../global/state/layout.service';

@Component({
  selector: 'app-bar-navegation',
  templateUrl: './bar-navegation.html',
  styleUrls: ['./bar-navegation.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class menuNavegat {
  public layout = inject(LayoutService);
}
