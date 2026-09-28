import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Importamos MatIcon si vas a pintar los logos de los servicios
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { cardDT } from '../../../interfaces/productoDT.interface';
import { negociosDetalle } from '../../../data/datosDT';

@Component({
  selector: 'app-detalles-negocio',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatTabsModule, MatButtonModule],
  templateUrl: './detalles-negocio.html',
  styleUrls: ['./detalles-negocio.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// aqui se usa un signal que resive el id al entrar a cada negocio usando el input y lo busca en la base de datos para poder mostrarlo o si no se encuentra muestra undefined tambien aqui se guardan los datos de las 3 imagenes a cual entraste para mostrar la siguiente en los botones y recibe los datos para pintar los punticos en celular 
export class DetallesNegocio {
  public id = input<string | undefined>();
  public selectedImageIndex = signal<number | null>(null); // esta variable sirve para guardar el dato para pasarselo a las funciones para pintar la siguiente foto la anterior foto o acabar la funcion.
  public activeCarouselIndex = signal<number>(0);

  private touchStartX = 0;
  private touchEndX = 0;

  // Explicacion detalla de "businessDetails" sistema de seguridad

  // 1. "input<string | undefined>()": Recibe el ID que viene de la URL (ej: "1", "2").
  // 2. "computed()": Es una función "inteligente" que se ejecuta sola cada vez que el ID cambia.
  // 3. "const currentId = this.id();": Captura el ID de la url que viene de app.routes y lo guarda en esta constante 
  // 4. "negociosDetalle.find(...)": Busca en la base de datos si el ID de la URL coincide con algún ID de la base de datos.
  // 5. "return negociosDetalle.find(...)": Si lo encuentra, devuelve todos los datos de ese negocio (nombre, fotos, dirección, etc.). Si no lo encuentra, devuelve "undefined".
  // Por lo tanto, "businessDetails()" siempre tendrá los datos listos para mostrar en la pantalla.


  public businessDetails = computed<cardDT | undefined>(() => {
    const currentId = this.id();
    if (!currentId) return undefined;
    return negociosDetalle.find(b => String(b.id) === String(currentId));
  });

  // PARA LA MALLA NEGRA EL OVERLAY

  public openLightbox(index: number) {
    this.selectedImageIndex.set(index);
  }

  // Explicación de openLightbox y la variable selectedImageIndex:

  // 1. EL SIGNAL: Arriba (al principio del archivo) declaramos "public selectedImageIndex = signal(null)"
  //    Es una "caja vacía" que el HTML vigila. Si está en null, la pantalla negra está apagada.

  // 2. EL ORIGEN: En el HTML, el ciclo "@for" le asignó un número secreto (i) a cada foto.

  // 3. EL CLIC: Al tocar una foto, el HTML grita: "¡Ejecuta openLightbox y atrápenme este número (ej. el 1)!"

  // 4. LA RECEPCIÓN: Esta función atrapa ese número en la variable "(index: number)".

  // 5. LA ACCIÓN: Usamos ".set(index)" para inyectar ese número en el Signal
  //  El HTML detecta que ya no es "null" y ¡enciende la pantalla negra mostrando esa foto!


  public closeLightbox() { // esta funcion cambia el valor de selectedImageIndex a null para que se cierre la funcion.
    this.selectedImageIndex.set(null);
  }

  // CAMBIAR LA FOTO EN PC USANDO BOTONES

  public nextImage(event?: Event) { // si tocas los botenes se suma 1 a selectedImageIndex para poner el overlay en la siguiente foto.
    if (event) event.stopPropagation();
    const images = this.businessDetails()?.imagenes || [];
    const currentIndex = this.selectedImageIndex();
    if (currentIndex !== null && images.length > 0) {
      const nextIndex = (currentIndex + 1) % images.length;
      this.selectedImageIndex.set(nextIndex);
    }
  }

  public prevImage(event?: Event) { // si tocas los botenes se resta 1 a selectedImageIndex para poner el overlay en la anterior foto.
    if (event) event.stopPropagation();
    const images = this.businessDetails()?.imagenes || [];
    const currentIndex = this.selectedImageIndex();
    if (currentIndex !== null && images.length > 0) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      this.selectedImageIndex.set(prevIndex);
    }
  }

  // ESTA PARTE PARA ABAJO ES PARA EL CELULAR

  public onTouchStart(event: TouchEvent) { // calculan la posicion donde inicia el dedo en la pantalla y inicia el swipe
    this.touchStartX = event.changedTouches[0].screenX;
  }

  public onTouchEnd(event: TouchEvent) { // calculan la posicion donde termina el dedo en la pantalla y llama a la funcion handleSwipe
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() { // calcula todo y ejecuta la funcion para que cambie la foto
    const swipeThreshold = 50;
    if (this.touchEndX < this.touchStartX - swipeThreshold) {
      this.nextImage(); // suma siguiente imagen
    }
    if (this.touchEndX > this.touchStartX + swipeThreshold) {
      this.prevImage(); // resta retrocede la imagen
    }
  }

  // aqui se calcula donde estas en la app para pintar los punticos para saber la posicion y la animacion en los punticos de la galeria y los de abajo el math round es para redondear el numero a un numero completo como 1, 2 en vez de 1,7 etc para que la funcion de arriba reciba el numero mas facil y el ts se conecta al html porque en el html al hacer clik se inicia y le pasan los 2 datos
  public onCarouselScroll(event: Event) { // esto es para celular esta para pintar los puntitos de abajo cuando se desliza la pantalla
    const element = event.target as HTMLElement;
    const scrollLeft = element.scrollLeft;
    const width = element.clientWidth;
    const index = Math.round(scrollLeft / width);
    if (this.activeCarouselIndex() !== index) {
      this.activeCarouselIndex.set(index);
    }
  }

  public scrollToImage(index: number, container: HTMLElement) { // esto es para celular cuando le das clik al puntito de abajo se recorre a la imagen que esta
    const width = container.clientWidth;
    container.scrollTo({ left: index * width, behavior: 'smooth' });
    this.activeCarouselIndex.set(index);
  }
}
