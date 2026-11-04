import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  imports: [RouterOutlet,Login],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tut');
  name="Angular Developer";
  age=20;
  message="welcome to Angular Developer";
  
  updateMessage(newMessage: string) {
    this.message = newMessage;
    return this.message;
  }
 

}
