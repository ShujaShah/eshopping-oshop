import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  
  signIn(){
    this.auth.signIn(this.email, this.password);
  }



  login(){
    this.auth.login();
  }

  fbLogin(){
    this.auth.fbLogin();
  }

  twitterLogin(){
    this.auth.twitterLogin();
  }

}
