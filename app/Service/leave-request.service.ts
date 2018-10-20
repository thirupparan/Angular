import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeaveRequest } from '../Models/leave-request.model';
import { ProcessLeaveRequest } from '../Models/process-leave-request.model';
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

  //Get All leave request 
  public getAllLeaveRequest() {
    return this.http.get<LeaveRequest[]>(this.leaveRequestUrl);
  }

  public getLeaveHistoryByUserId(empId) {
    return this.http.get<LeaveRequest[]>(this.leaveRequestUrl + "/user/" + empId);
  }
  public createLeaveRequest(leaveRequest) {
    return this.http.post<LeaveRequest>(this.leaveRequestUrl, leaveRequest);
  }

  public approvedLeaveRequest(processLeaveRequest) {
    return this.http.post<ProcessLeaveRequest>(this.leaveRequestUrl+"/leaveapprove",processLeaveRequest);
  }

}
