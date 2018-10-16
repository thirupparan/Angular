import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Leave} from '../Models/leave.model';
// Import the model file


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

// interface UserNumOfLeaves{
//   leavetype:number;
//   reamaingDays:number;
// }

export class LeaveService {
  constructor(private http: HttpClient) { }
  // constructor() { }
  private leaveUrl = 'http://localhost:8080/hrm_system/leave';

  // //Get All Department
  // public getAllLeaveRequest() {
  //   return this.http.get<LeaveRequest[]>(this.leaveRequestUrl);
  // }


  public getRemainingLeave(userStr) {
    return this.http.get<Leave[]>(this.leaveUrl + "/"+ userStr);
  }

  public getRemainingLeaveByUidAndLid(userStr,leaveStr) {
    return this.http.get<number>(this.leaveUrl + "/"+ userStr+ "/"+ leaveStr);
  }

  // public createLeaveRequest(leaveRequest) {
  //   return this.http.post<LeaveRequest>(this.leaveRequestUrl, leaveRequest);
  // }
}
