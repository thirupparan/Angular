import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import the model file
import {LeaveType} from "../Models/leave-type.model";
@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {
  constructor(private http:HttpClient) {}
  // constructor() { }
  private leaveTypeUrl = 'http://localhost:8080/hrm_system/leavetype'; 

  //Get All Department
  public getAllLeaveType() {
    return this.http.get<LeaveType[]>(this.leaveTypeUrl);
  }


  // public deleteDepartment(Department) {
  //   return this.http.delete(this.userUrl + "/"+ Department.id);
  // }

  public createLeaveType(LeaveType) {
    return this.http.post<LeaveType>(this.leaveTypeUrl, LeaveType);
  }
}
