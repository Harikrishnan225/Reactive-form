import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = '';

  constructor(){

  }

  colorRed(): void {
    this.value = 'bg-red'
  }

  colorChange(): void {
    if(this.value === 'bg-red'){
      this.value = 'bg-green';
      return;
    }
    this.value = 'bg-red';
  }
}
