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
  name:string="Angular Developer";
  age=20;
  message="welcome to Angular Developer";
  setColor='lightblue';
  disabled=false;

  count:number=0;

  counter(action: string) {
    if(action=="increment")
    this.count++;
    else if(action=="decrement")
      this.count>0 && this.count--;
  }

onInput(event:Event | string) {
  console.log(event);
}

  onMouseOver(event:Event | string) {
    
    console.log(event);
  }


  ChangeColor(){
    console.log('Changing color to red');
    this.setColor = "red";
  }

  // updateMessage(newMessage: string): string {
  //   this.message = newMessage;
  //  // alert(this.message);
  //   return this.message;
  // }

  


 

}
