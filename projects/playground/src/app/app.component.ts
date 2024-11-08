import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FdsIconsCollectionComponent } from '../../../ngx-dkfds/src/lib/icons/fds-icons-collection/fds-icons-collection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FdsIconsCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'playground';
}
