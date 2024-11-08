import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FdsIconName } from '../fds-icon-name.model';

@Component({
  selector: 'fds-icon',
  standalone: true,
  templateUrl: './fds-icon.component.html',
  styleUrl: './fds-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FdsIconComponent {
  public name = input.required<FdsIconName>();
}
