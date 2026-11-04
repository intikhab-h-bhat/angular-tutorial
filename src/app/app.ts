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
  count=0;

  counter(action: string) {
    if(action=="increment")
    this.count++;
    else if(action=="decrement")
      this.count>0 && this.count--;
  }


  // updateMessage(newMessage: string) {
  //   this.message = newMessage;
  //   alert(this.message);
  //   // return this.message;
  // }
 

}
