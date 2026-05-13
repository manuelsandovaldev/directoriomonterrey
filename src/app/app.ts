import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { barNavegation } from './bar-navegation/bar-navegation';
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, barNavegation],
  standalone: true,
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
