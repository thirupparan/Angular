import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from 'src/app/Models/leave-request.model';
import { LeaveRequestService } from 'src/app/Service/leave-request.service';
import { LeaveTypeService } from 'src/app/Service/leave-type.service';
import { LeaveType } from 'src/app/Models/leave-type.model';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
  leaveRequests: LeaveRequest[];
  leaveTypes: LeaveType[];
  constructor(private leaveRequestService: LeaveRequestService, private leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.getLeaveRequest()
    this.getLeaveType()
  }
  getLeaveType() {
    this.leaveTypeService.getAllLeaveType()
      .subscribe(data => {
        this.leaveTypes = data;
        console.log(data);
      });
  }
  getLeaveRequest() {
    this.leaveRequestService.getAllLeaveRequest()
      .subscribe(data => {
        this.leaveRequests = data;
        //console.log(data);
        alert(this.leaveRequests);
      });
  }

}
