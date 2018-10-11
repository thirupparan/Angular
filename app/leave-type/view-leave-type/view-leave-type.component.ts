import { Component, OnInit } from '@angular/core';
import {LeaveType} from "../../Models/leave-type.model";
import { LeaveTypeService } from '../../Service/leave-type.service';

@Component({
  selector: 'app-view-leave-type',
  templateUrl: './view-leave-type.component.html',
  styleUrls: ['./view-leave-type.component.css']
})
export class ViewLeaveTypeComponent implements OnInit {
  leaveTypes: LeaveType[];

  constructor(private leaveTypeService: LeaveTypeService) {

  }

  ngOnInit() {
    this.leaveTypeService.getAllLeaveType()
      .subscribe(data => {
        
        this.leaveTypes  = data;
        console.log(data);
      });
  }
}
