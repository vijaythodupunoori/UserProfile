import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  activeTab: string = 'about';

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigateByUrl('/user-profile');
  }
}
