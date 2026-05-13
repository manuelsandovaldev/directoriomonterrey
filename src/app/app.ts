import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/extensions/header/header';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent],
  standalone: true,
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
