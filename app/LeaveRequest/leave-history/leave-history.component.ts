import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from 'src/app/Models/leave-request.model';
import { LeaveRequestService } from 'src/app/Service/leave-request.service';
import { AuthService } from 'src/app/Auth/auth.service';


@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
  leaveRequests: LeaveRequest[];

  constructor(private leaveRequestService: LeaveRequestService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getLeaveHistory();
  }
  getLeaveHistoryByUserId(empId:string){
    this.leaveRequestService.getLeaveHistoryByUserId(empId)
    .subscribe(data =>{
      this.leaveRequests =data;
      console.log(data);
    });
  }

  getLeaveHistory(){
    
    this.authService.isUserId.subscribe(data=>{
      this.getLeaveHistoryByUserId(data.toString());
          });
  }
 

}
