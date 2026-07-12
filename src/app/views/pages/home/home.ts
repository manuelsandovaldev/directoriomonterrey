import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer } from '../../../components/extensions/footer/footer';
import { homeBanners, homeDiscounts } from '../../../data/home-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  public banners = homeBanners;
  public discounts = homeDiscounts;
}
