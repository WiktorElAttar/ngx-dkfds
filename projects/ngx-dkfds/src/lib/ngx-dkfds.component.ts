import { Component } from '@angular/core';

@Component({
  selector: 'fds-ngx-dkfds',
  standalone: true,
  imports: [],
  template: ` <p>ngx-dkfds works!</p> `,
  styles: ``,
})
export class NgxDkfdsComponent {
  constructor() {
    this.sayHello();
  }

  private sayHello(): void {
    console.log('Hello World!');
  }
}
