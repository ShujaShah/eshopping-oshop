import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';
import {UserService}from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService : UserService, private auth: AuthService, router: Router){
    auth.user$.subscribe(user=>{
      if (!user) return;
    
        userService.save(user); 

        let returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) return;
        
          localStorage.removeItem('returnUrl');

          router.navigateByUrl(returnUrl);
        
    });
  }
}
