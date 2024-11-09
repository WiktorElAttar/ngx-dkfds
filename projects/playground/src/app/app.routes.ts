import { Routes } from '@angular/router';
import { AlertsPlaygroundComponent } from './playgrounds/alerts-playground/alerts-playground.component';
import { BadgePlaygroundComponent } from './playgrounds/badge-playground/badge-playground.component';
import { CardPlaygroundComponent } from './playgrounds/card-playground/card-playground.component';

export const routes: Routes = [
  {
    path: 'cards',
    component: CardPlaygroundComponent,
  },
  {
    path: 'alerts',
    component: AlertsPlaygroundComponent,
  },
  {
    path: 'badges',
    component: BadgePlaygroundComponent,
  },
];
