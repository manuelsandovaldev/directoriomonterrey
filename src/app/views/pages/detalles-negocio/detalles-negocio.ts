import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Importamos MatIcon si vas a pintar los logos de los servicios
import { MatIconModule } from '@angular/material/icon';

import { cardDT } from '../../../interfaces/productoDT.interface';
import { negociosDetalle } from '../../../data/datosDT';

@Component({
  selector: 'app-detalles-negocio',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './detalles-negocio.html',
  styleUrls: ['./detalles-negocio.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetallesNegocio {
  public id = input<string | undefined>();
  public selectedImageIndex = signal<number | null>(null);

  private touchStartX = 0;
  private touchEndX = 0;

  public businessDetails = computed<cardDT | undefined>(() => {
    const currentId = this.id();
    if (!currentId) return undefined;
    return negociosDetalle.find(b => String(b.id) === String(currentId));
  });

  public openLightbox(index: number) {
    this.selectedImageIndex.set(index);
  }

  public closeLightbox() {
    this.selectedImageIndex.set(null);
  }

  public nextImage(event?: Event) {
    if (event) event.stopPropagation();
    const images = this.businessDetails()?.imagenes || [];
    const currentIndex = this.selectedImageIndex();
    if (currentIndex !== null && images.length > 0) {
      const nextIndex = (currentIndex + 1) % images.length;
      this.selectedImageIndex.set(nextIndex);
    }
  }

  public prevImage(event?: Event) {
    if (event) event.stopPropagation();
    const images = this.businessDetails()?.imagenes || [];
    const currentIndex = this.selectedImageIndex();
    if (currentIndex !== null && images.length > 0) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      this.selectedImageIndex.set(prevIndex);
    }
  }

  public onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  public onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeThreshold = 50;
    if (this.touchEndX < this.touchStartX - swipeThreshold) {
      this.nextImage();
    }
    if (this.touchEndX > this.touchStartX + swipeThreshold) {
      this.prevImage();
    }
  }
}