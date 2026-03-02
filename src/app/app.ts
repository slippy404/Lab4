import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';
// Import Angular tools and the ListComponent used in this app

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'#
  // Defines the main App component and connects its template and styles
  
})
export class App {
  count:number = 0;
  hide:boolean = false;
  // Stores the counter value and a boolean to control visibility
  
  onButtonClick(){
    this.count++;
  }
  // Increases the counter when the button is clicked
  
  onDoubleClick(){
    if (this.hide === false) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }
  // Toggles the visibility when double-clicked
}
