import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'shared/models/app.user';
import { UserService } from 'shared/services/user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute,
     private userService : UserService,
     private snackBar: MatSnackBar) { 
    this.user$ = afAuth.authState;
  }

 signIn(email: string, password: string){
  let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')|| '/';
  localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
    this.snackBar.open('Successfully logged in!', res.observable , {
      duration:4000
    } );
  })
.catch(err => {
this.snackBar.open('', err.message, {
  duration:4000,
});
});
  }

  
  signUp(email:string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
  this.snackBar.open('Successfully signed up!', res,{
    duration: 4000,
  });
  }).catch(error => {
  this.snackBar.open('', error.message,{
    duration:4000
  });
  });
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')|| '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }


  fbLogin(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')|| '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  twitterLogin(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')|| '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  get appUser$() : Observable<AppUser>{
    return this.user$
      .switchMap(user => {
        if (user) return this.userService.get(user.uid);

        return Observable.of(null);
      });
  }
}
