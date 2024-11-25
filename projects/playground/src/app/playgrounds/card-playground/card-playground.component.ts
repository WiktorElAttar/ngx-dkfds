import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from 'ngx-dkfds';

@Component({
  selector: 'app-card-playground',
  imports: [CardComponent],
  templateUrl: './card-playground.component.html',
  styleUrl: './card-playground.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CardPlaygroundComponent {}
