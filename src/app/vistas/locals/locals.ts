// locals.ts (Corregido)

import { Component, signal } from '@angular/core';
import { datos } from '../../data/datos';
import { Card } from '../../components/card/card';
import { CommonModule } from '@angular/common'; // <-- ¡VERIFICAR QUE ESTÉ!

@Component({
  selector: 'app-locals',
  imports: [Card],
  templateUrl: './locals.html',
  styleUrl: './locals.css'
})
export class Locals {
    public locals = signal(datos);
    // ...
}