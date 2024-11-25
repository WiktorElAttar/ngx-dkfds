import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent } from 'ngx-dkfds';

@Component({
  selector: 'app-alerts-playground',
  templateUrl: './alerts-playground.component.html',
  styleUrl: './alerts-playground.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AlertComponent],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AlertsPlaygroundComponent {}
