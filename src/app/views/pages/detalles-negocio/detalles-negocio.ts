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

// aqui se usa un signal que resive el id al entrar a cada negocio usando el input y lo busca en la base de datos para poder mostrarlo o si no se encuentra muestra undefined tambien aqui se guardan los datos de las 3 imagenes a cual entraste para mostrar la siguiente en los botones y recibe los datos para pintar los punticos en celular 

export class DetallesNegocio {
  public id = input<string | undefined>();
  public selectedImageIndex = signal<number | null>(null);
  public activeCarouselIndex = signal<number>(0);

  private touchStartX = 0;
  private touchEndX = 0;

  // aqui se calcula donde estas en la app para pintar los punticos para saber la posicion y la animacion en los punticos de la galeria y los de abajo el math round es para redondear el numero a un numero completo como 1, 2 en vez de 1,7 etc para que la funcion de arriba reciba el numero mas facil 

  public onCarouselScroll(event: Event) {
    const element = event.target as HTMLElement;
    const scrollLeft = element.scrollLeft;
    const width = element.clientWidth;
    const index = Math.round(scrollLeft / width);
    if (this.activeCarouselIndex() !== index) {
      this.activeCarouselIndex.set(index);
    }
  }

  public scrollToImage(index: number, container: HTMLElement) {
    const width = container.clientWidth;
    container.scrollTo({ left: index * width, behavior: 'smooth' });
    this.activeCarouselIndex.set(index);
  }

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