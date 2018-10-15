import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from 'src/app/Service/leave-type.service';
import { LeaveType } from 'src/app/Models/leave-type.model';
import { LeaveRequest } from 'src/app/Models/leave-request.model';
import { LeaveRequestService } from 'src/app/Service/leave-request.service';

@Component({
  selector: 'app-apply-leave-request',
  templateUrl: './apply-leave-request.component.html',
  styleUrls: ['./apply-leave-request.component.css']
})
export class ApplyLeaveRequestComponent implements OnInit {

  leaveTypes: LeaveType[];
  leaveRequest:LeaveRequest=new LeaveRequest();

  constructor(private leaveTypeService: LeaveTypeService,private leaveRequestService:LeaveRequestService) {

  }

  ngOnInit() {
    this.leaveTypeService.getAllLeaveType()
      .subscribe(data => {
        this.leaveTypes  = data;
        console.log(data);
      });
  }

 
  createLeaveRequest(){
    console.log(this.leaveRequest);
     //var today = new Date('2017-09-11');
     this.leaveRequest.getleaveDays();

      this.leaveRequestService.createLeaveRequest(this.leaveRequest)
     .subscribe(data =>{
       alert("Leave applied successfully")
     });
 
    

  }

}
