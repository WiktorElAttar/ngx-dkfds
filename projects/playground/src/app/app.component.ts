import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FdsIconsCollectionComponent } from 'ngx-dkfds';

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
