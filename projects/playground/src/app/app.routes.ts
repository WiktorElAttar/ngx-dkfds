import { Routes } from '@angular/router';
import { AlertsPlaygroundComponent } from './components/alerts-playground/alerts-playground.component';
import { CardPlaygroundComponent } from './components/card-playground/card-playground.component';

export const routes: Routes = [
  {
    path: 'cards',
    component: CardPlaygroundComponent,
  },
  {
    path: 'alerts',
    component: AlertsPlaygroundComponent,
  },
];
