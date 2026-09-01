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

  // Explicacion detalla de "businessDetails"

  // 1. "input<string | undefined>()": Recibe el ID que viene de la URL (ej: "1", "2").
  // 2. "computed()": Es una función "inteligente" que se ejecuta sola cada vez que el ID cambia.
  // 3. "const currentId = this.id();": Captura el ID de la url que viene de app.routes y lo guarda en esta constante 
  // 3. "negociosDetalle.find(...)": Busca en la base de datos si el ID de la URL coincide con algún ID de la base de datos.
  // 4. "return negociosDetalle.find(...)": Si lo encuentra, devuelve todos los datos de ese negocio (nombre, fotos, dirección, etc.). Si no lo encuentra, devuelve "undefined".
  // Por lo tanto, "businessDetails()" siempre tendrá los datos listos para mostrar en la pantalla.


  public businessDetails = computed<cardDT | undefined>(() => {
    const currentId = this.id();
    if (!currentId) return undefined;
    return negociosDetalle.find(b => String(b.id) === String(currentId));
  });



  // =========================================================
  // 2. LIGHTBOX (La foto negra gigante que se abre al dar click)
  // =========================================================
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

  // =========================================================
  // 3. CARRUSEL MÓVIL (Las fotos que se deslizan y los puntitos de abajo)
  // =========================================================

  // aqui se calcula donde estas en la app para pintar los punticos para saber la posicion y la animacion en los punticos de la galeria y los de abajo el math round es para redondear el numero a un numero completo como 1, 2 en vez de 1,7 etc para que la funcion de arriba reciba el numero mas facil y el ts se conecta al html porque en el html al hacer clik se inicia y le pasan los 2 datos
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
}
