import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import the model file
import {Role} from '../Models/role.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {}
  // constructor() { }
  private roleUrl = 'http://localhost:8080/hrm_system/role';

  // Get All Department
  public getAllRoles() {
    return this.http.get<Role[]>(this.roleUrl);
  }


  // public deleteDepartment(Department) {
  //   return this.http.delete(this.userUrl + "/"+ Department.id);
  // }

  public createRoles(role) {
    return this.http.post<Role>(this.roleUrl, role);
  }
}
