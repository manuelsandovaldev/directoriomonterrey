import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public sidenavOpened = signal<boolean>(true);

  toggleSidenav() {
    this.sidenavOpened.update(v => !v);
  }
}
