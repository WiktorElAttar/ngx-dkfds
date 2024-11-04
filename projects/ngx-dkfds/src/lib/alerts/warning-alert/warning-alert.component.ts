import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'fds-warning-alert',
  standalone: true,
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarningAlertComponent {
  public headerText = input<string>();
  public alertText = input<string>();

  public showCloseButton = input<boolean>(false);
  public closeButtonText = input<string>('Luk');
}
