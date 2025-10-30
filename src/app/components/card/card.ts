import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export interface cardInterface {
  title: string;
  subtitle?: string;
  description: string;
  phone: string;
  img: string;
}

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
    @Input() conector: cardInterface | undefined;
}
