import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'fds-success-alert',
  standalone: true,
  imports: [],
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessAlertComponent {
  public headerText = input<string>();
  public alertText = input<string>();

  public showCloseButton = input<boolean>(false);
  public closeButtonText = input<string>('Luk');
}
