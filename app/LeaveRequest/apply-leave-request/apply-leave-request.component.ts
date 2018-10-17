import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from 'src/app/Service/leave-type.service';
import { LeaveType } from 'src/app/Models/leave-type.model';
import { LeaveRequest } from 'src/app/Models/leave-request.model';
import { LeaveRequestService } from 'src/app/Service/leave-request.service';
import { LeaveService } from 'src/app/Service/leave.service';
import { Leave } from 'src/app/Models/leave.model';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-apply-leave-request',
  templateUrl: './apply-leave-request.component.html',
  styleUrls: ['./apply-leave-request.component.css']
})
export class ApplyLeaveRequestComponent implements OnInit {

  leaveTypes: LeaveType[];
  leaveRequest: LeaveRequest = new LeaveRequest();
  leave: Leave[];

  remainingDays: number;
  validationStatus: boolean = false;
  validationMsg: String = "";
  dateMsg: string = "";
  userId:number=null;

  constructor(
    private leaveTypeService: LeaveTypeService,
     private leaveRequestService: LeaveRequestService, 
     private leaveService: LeaveService,
     private authService: AuthService) {

  }

  ngOnInit() {
    this.leaveTypeService.getAllLeaveType()
      .subscribe(data => {
        this.leaveTypes = data;
        console.log(data);
      });

    this.getRemainingLeave("1");
    //this.getRemainingLeaveByUidAndLid("1","3")
   this.getUserId();
   
  }

  checkNegativity() {
    if (this.leaveRequest.getleaveDays() < 0) {
      this.dateMsg = "dateNegativity";
      this.validationStatus = true;
    }
  }

  getUserId(){
    
    this.authService.isUserId.subscribe(data=>{
    this.userId= data;
          });
  }

  createLeaveRequest() {
    console.log(this.leaveRequest);
    //var today = new Date('2017-09-11');
    if (this.leaveRequest.getleaveDays() > this.remainingDays) {
      // alert("can't take leave");  
      this.validationStatus = true;
    } else {
      this.leaveRequest.userId=this.userId;
      this.leaveRequestService.createLeaveRequest(this.leaveRequest)
        .subscribe(data => {
          //alert("Leave applied successfully")
          this.validationStatus = false;
          this.validationMsg = "ok";
        });
    }
  }

  getRemainingLeave(userId: String) {
    this.leaveService.getRemainingLeave(userId)
      .subscribe(data => {
        this.leave = data;
        console.log(data);
      });
  }
  getRemainingLeaveByUidAndLid(userId: String, leaveTypeId: string) {
    this.leaveService.getRemainingLeaveByUidAndLid(userId, leaveTypeId)
      .subscribe(data => {

        //alert(data);
        this.remainingDays = data;
      });
  }

}