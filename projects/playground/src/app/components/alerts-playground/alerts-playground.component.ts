import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ErrorAlertComponent } from '../../../../../ngx-dkfds/src/lib/alerts/error-alert/error-alert.component';
import { InfoAlertComponent } from '../../../../../ngx-dkfds/src/lib/alerts/info-alert/info-alert.component';
import { SuccessAlertComponent } from '../../../../../ngx-dkfds/src/lib/alerts/success-alert/success-alert.component';
import { WarningAlertComponent } from '../../../../../ngx-dkfds/src/lib/alerts/warning-alert/warning-alert.component';

@Component({
  selector: 'app-alerts-playground',
  standalone: true,
  templateUrl: './alerts-playground.component.html',
  styleUrl: './alerts-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InfoAlertComponent, SuccessAlertComponent, WarningAlertComponent, ErrorAlertComponent],
})
export class AlertsPlaygroundComponent {}
