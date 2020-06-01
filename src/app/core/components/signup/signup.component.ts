import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }
  
  signUp(){
    this.auth.signUp(this.email, this.password);
  }
}
