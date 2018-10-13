import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import the model file

import { User } from '../Models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) {}
  // constructor() { }
  private userUrl = 'http://localhost:8080/hrm_system/user'; 

  //Get All Department
  public getAllUser() {
    return this.http.get<User[]>(this.userUrl);
  }


  // public deleteDepartment(Department) {
  //   return this.http.delete(this.userUrl + "/"+ Department.id);
  // }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
}
