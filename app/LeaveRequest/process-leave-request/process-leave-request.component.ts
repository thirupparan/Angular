import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from 'src/app/Models/leave-request.model';
import { LeaveRequestService } from 'src/app/Service/leave-request.service';
import { ProcessLeaveRequest } from 'src/app/Models/process-leave-request.model';

@Component({
  selector: 'app-process-leave-request',
  templateUrl: './process-leave-request.component.html',
  styleUrls: ['./process-leave-request.component.css']
})
export class ProcessLeaveRequestComponent implements OnInit {

  leaveRequests: LeaveRequest[];
  processleaverequest=new ProcessLeaveRequest();

  constructor(private leaveRequestService: LeaveRequestService) {

  }

  ngOnInit() {
    this.getAllLeaveRequest();
  }

  getAllLeaveRequest(){
    this.leaveRequestService.getAllLeaveRequest()
    .subscribe(data => {
      
      this.leaveRequests  = data;
      console.log(data);
    });
  }

  approveLeave(lvRequestId){
    this.processleaverequest.leaveRequestId=lvRequestId;
    this.processleaverequest.processedBy=2;
    this.processleaverequest.statusId=1;
    this.processleaverequest.rejectreason=null;
   // console.log(this.processleaverequest);
    this.leaveRequestService.approvedLeaveRequest(this.processleaverequest).subscribe(data=>{
      alert("Approved");
      this.getAllLeaveRequest();
    })
  }

}
