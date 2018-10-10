import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import the model file
import {Department} from "../Models/department.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) {}
  // constructor() { }
  private depUrl = 'http://localhost:8080/hrm_system/department'; 

  //Get All Department
  public getAllDepartment() {
    return this.http.get<Department[]>(this.depUrl);
  }


  // public deleteDepartment(Department) {
  //   return this.http.delete(this.userUrl + "/"+ Department.id);
  // }

  public createDepartment(department) {
    return this.http.post<Department>(this.depUrl, department);
  }
}
