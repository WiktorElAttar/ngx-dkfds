import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FdsBadgeType } from './badge-type.model';

@Component({
  selector: 'fds-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class BadgeComponent {
  public text = input.required<string>();
  public type = input.required<FdsBadgeType>();
  public size = input.required<'small' | 'large'>();
}
