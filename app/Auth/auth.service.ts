import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userAdmin : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userId : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isUserId() {
    return this.userId.asObservable();
  }

  constructor(
    private router: Router
  ) { }

  login(user: User) {

    if (user.userName == 'admin' && user.password !== '') {
      this.userAdmin.next(true);
      this.loggedIn.next(true);
      this.userId.next(parseInt(user.password));
      this.router.navigate(['/department']);
    }else if(user.userName == 'emp' && user.password !== '') {
      this.userAdmin.next(false);
      this.loggedIn.next(true);
      this.router.navigate(['/leaveHistory']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
  get getRole(){
    return this.userAdmin.asObservable();
    
  }
}
