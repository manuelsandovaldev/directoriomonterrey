
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { cardInterface } from '../../interfaces/card.interface';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, FontAwesomeModule, MatDialogModule, MatIconModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public conector = input.required<cardInterface>();
  public faInstagram = faInstagram;
  public faFacebook = faFacebook;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CardDialogComponent, {
      data: this.conector(),
      width: '80%',
      maxWidth: '500px',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container'
    });
  }
}
