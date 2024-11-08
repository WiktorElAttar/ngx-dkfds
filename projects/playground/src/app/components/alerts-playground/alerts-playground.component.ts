import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent } from '../../../../../ngx-dkfds/src/lib/alerts/alert/alert.component';

@Component({
  selector: 'app-alerts-playground',
  standalone: true,
  templateUrl: './alerts-playground.component.html',
  styleUrl: './alerts-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AlertComponent],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AlertsPlaygroundComponent {}
