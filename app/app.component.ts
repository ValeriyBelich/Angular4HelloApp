import { Component } from '@angular/core';

@Component({
selector: 'my-app',
template: `<p>Количество кликов  {{count}}</p>
          <button (click)="increase()">Click</button>`
})
export class AppComponent { 
count: number=0;
increase() : void {
  this.count++;
}
}