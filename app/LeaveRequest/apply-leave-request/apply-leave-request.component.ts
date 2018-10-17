import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from 'src/app/Service/leave-type.service';
import { LeaveType } from 'src/app/Models/leave-type.model';
import { LeaveRequest } from 'src/app/Models/leave-request.model';
import { LeaveRequestService } from 'src/app/Service/leave-request.service';
import { LeaveService } from 'src/app/Service/leave.service';
import { Leave } from 'src/app/Models/leave.model';

@Component({
  selector: 'app-apply-leave-request',
  templateUrl: './apply-leave-request.component.html',
  styleUrls: ['./apply-leave-request.component.css']
})
export class ApplyLeaveRequestComponent implements OnInit {

  leaveTypes: LeaveType[];
  leaveRequest: LeaveRequest = new LeaveRequest();
  leave: Leave[];

  // tslint:disable-next-line:max-line-length
  constructor(private leaveTypeService: LeaveTypeService, private leaveRequestService: LeaveRequestService, private leaveService: LeaveService) {

  }

  ngOnInit() {
    this.leaveTypeService.getAllLeaveType()
      .subscribe(data => {
        this.leaveTypes = data;
        console.log(data);
      });

      this.getRemainingLeave('2');
      this.getRemainingLeaveByUidAndLid('1', '1');
  }


  createLeaveRequest() {
    console.log(this.leaveRequest);
    // var today = new Date('2017-09-11');
    this.leaveRequest.getleaveDays();

    this.leaveRequestService.createLeaveRequest(this.leaveRequest)
      .subscribe(data => {
        alert('Leave applied successfully');
      });
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

      alert(data);
    });
  }

}
