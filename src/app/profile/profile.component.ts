import { Component } from '@angular/core'; 


@Component({
    selector: 'app-profile',
    //template: '<h1>Profile Component</h1>',
    templateUrl: './profile.component.html',
        // styles:'h1 { color: blue; }'
    styleUrl: './profile.component.css'
})


   export class ProfileComponent {




updateProfile(funcalled:string) {
    console.log('Profile updated!');
    console.log(funcalled);
    this.otherFunction('Other Function');
}

otherFunction(otherfun:string) {
    alert('Other function called! ' + otherfun);
}

   }