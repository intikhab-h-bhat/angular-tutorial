import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile.component';
import { Counter } from './counter/counter';

@Component({
  imports: [RouterOutlet,Login,ProfileComponent,Counter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  data=0;
  count=signal(0);

constructor(){
  effect(() => {
    //console.log(this.data);
    console.log(this.count());
  });
}


  updatecount() {
    this.count.set(this.count() + 1);   
    
    if (this.count()=== 10) {
      this.count.set(0);
      console.log('Count reset to 0');
}
  }

  updateData() {
    this.data += 1;
    // console.log(this.data);
     if (this.data === 10) {
      this.data = 0;
      console.log('Data reset to 0');
    }
  }
}



