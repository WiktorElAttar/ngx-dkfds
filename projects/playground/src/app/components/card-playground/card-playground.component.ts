import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../../../../ngx-dkfds/src/lib/card/card.component';

@Component({
  selector: 'app-card-playground',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-playground.component.html',
  styleUrl: './card-playground.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CardPlaygroundComponent {}
