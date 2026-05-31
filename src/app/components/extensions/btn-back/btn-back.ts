import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

// --- Angular Material ---
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-btn-back',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './btn-back.html',
  styleUrls: ['./btn-back.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnBack {
  private location = inject(Location);

  goBack(): void {
    this.location.back();
  }
}