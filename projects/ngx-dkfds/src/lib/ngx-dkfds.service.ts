import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxDkfdsService {
  constructor() {
    this.sayHello();
  }

  private sayHello(): void {
    console.log('Hello World!');
  }
}
