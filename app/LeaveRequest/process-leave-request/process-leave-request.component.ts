import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from 'src/app/Models/leave-request.model';
import { LeaveRequestService } from 'src/app/Service/leave-request.service';

@Component({
  selector: 'app-process-leave-request',
  templateUrl: './process-leave-request.component.html',
  styleUrls: ['./process-leave-request.component.css']
})
export class ProcessLeaveRequestComponent implements OnInit {

  leaveRequests: LeaveRequest[];

  constructor(private leaveRequestService: LeaveRequestService) {

  }

  ngOnInit() {
    this.leaveRequestService.getAllLeaveRequest()
      .subscribe(data => {
        
        this.leaveRequests  = data;
        console.log(data);
      });
  }

}
