import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from 'ngx-dkfds';

@Component({
  selector: 'app-badge-playground',
  templateUrl: './badge-playground.component.html',
  styleUrl: './badge-playground.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BadgePlaygroundComponent {}
