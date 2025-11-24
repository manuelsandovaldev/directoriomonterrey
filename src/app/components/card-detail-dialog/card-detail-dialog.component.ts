import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

// Definimos una interfaz para la data que espera nuestro diálogo
export interface DialogData {
  title: string;
  imageUrl: string;
  content: string;
}

@Component({
  selector: 'app-card-detail-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage
  ],
  templateUrl: './card-detail-dialog.component.html',
  styleUrls: ['./card-detail-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailDialogComponent {
  // Inyectamos los datos que vienen desde el componente que abrió el diálogo
  data: DialogData = inject(MAT_DIALOG_DATA);
}
