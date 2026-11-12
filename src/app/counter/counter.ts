import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
country: string="Jammu and Kashmir"
count: number = 0;

increament() {
  console.log('Increment called');
  this.count++;
}
decreament() {
if (this.count > 0) {
  this.count--;
}
else{
  alert('Count cannot be less than 0');
}
}



}
