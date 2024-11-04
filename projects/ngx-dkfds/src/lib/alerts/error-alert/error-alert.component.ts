import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'fds-error-alert',
  standalone: true,
  templateUrl: './error-alert.component.html',
  styleUrl: './error-alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorAlertComponent {
  public headerText = input<string>();
  public alertText = input<string>();

  public showCloseButton = input<boolean>(false);
  public closeButtonText = input<string>('Luk');
}
