import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'fds-info-alert',
  standalone: true,
  templateUrl: './info-alert.component.html',
  styleUrl: './info-alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoAlertComponent {
  public headerText = input<string>();
  public alertText = input<string>();

  public showCloseButton = input<boolean>(false);
  public closeButtonText = input<string>('Luk');
}
