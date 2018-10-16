import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeaveRequest } from '../Models/leave-request.model';
// Import the model file


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http: HttpClient) { }
  // constructor() { }
  private leaveRequestUrl = 'http://localhost:8080/hrm_system/leaverequest';

  //Get All Department
  public getAllLeaveRequest() {
    return this.http.get<LeaveRequest[]>(this.leaveRequestUrl);
  }


  // public deleteDepartment(Department) {
  //   return this.http.delete(this.userUrl + "/"+ Department.id);
  // }

  public createLeaveRequest(leaveRequest) {
    return this.http.post<LeaveRequest>(this.leaveRequestUrl, leaveRequest);
  }
  // public getRemainingLeave() {
  //   return this.http.get<LeaveRequest[]>(this.leaveRequestUrl);
  // }

}
