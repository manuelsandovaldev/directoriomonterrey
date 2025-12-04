import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export interface cardInterface { // la interface
  title: string;
  subtitle?: string;
  description: string;
  phone: string;
  img: string;
}

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, FontAwesomeModule ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
    @Input() conector: cardInterface | undefined; // esta linea de codigo lo que es que crea un decorador "@Input" y crea un variable "conector" esta variable recibira datos de la interface "cardInterface" y los datos pueden ser de cualquier tipo "undiefined".
    public faInstagram = faInstagram;

    public faFacebook = faFacebook;


}



