import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FleetListComponent } from './fleet/fleet-list/fleet-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app/auth/login', pathMatch: 'full' },
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'auth/login',
        component: LoginComponent,
      },
      {
        path: 'fleet/list',
        component: FleetListComponent,
      },
    ],
  },
];
