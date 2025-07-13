import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile';
import { AboutMeComponent } from './about-me.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'about-me', component: AboutMeComponent },
];
