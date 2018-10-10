import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import the model file
import {Status} from "../Models/status.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http:HttpClient) {}
  // constructor() { }
  private statusUrl = 'http://localhost:8080/hrm_system/status'; 

  //Get All Department
  public getAllStatus() {
    return this.http.get<Status[]>(this.statusUrl);
  }


  // public deleteDepartment(Department) {
  //   return this.http.delete(this.userUrl + "/"+ Department.id);
  // }

  public createStatus(status) {
    return this.http.post<Status>(this.statusUrl, status);
  }
}
