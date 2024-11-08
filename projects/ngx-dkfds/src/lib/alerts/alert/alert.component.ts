import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FdsIconName } from 'ngx-dkfds';
import { FdsIconComponent } from '../../icons/fds-icon/fds-icon.component';
import { FdsAlertType } from './alert-type.model';

@Component({
  selector: 'fds-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FdsIconComponent],
})
export class AlertComponent {
  public type = input.required<FdsAlertType>();

  public headerText = input<string>();
  public alertText = input<string>();

  public canClose = input<boolean>(false);
  public closeLabel = input<string>('Luk');

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  protected iconName = computed<FdsIconName>(() => this.typeToIconMap.get(this.type())!);

  private typeToIconMap = new Map<FdsAlertType, FdsIconName>([
    ['error', 'highlight-off'],
    ['info', 'info'],
    ['success', 'check-circle'],
    ['warning', 'report-problem'],
  ]);
}