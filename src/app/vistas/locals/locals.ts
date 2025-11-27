import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { datos } from '../../data/datos';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-locals',
  standalone: true,
  imports: [Card],
  templateUrl: './locals.html',
  styleUrl: './locals.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalsComponent {
    public locals = signal(datos);
}
