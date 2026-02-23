import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count:number = 0;
  hide:boolean = false;
  onButtonClick(){
    this.count++;
  }
  onDoubleClick(){
    if (this.hide === false) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }
}
