import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../Service/leave-type.service';
import { LeaveType } from '../../Models/leave-type.model';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit {

  leaveType: LeaveType=new LeaveType();
  

  constructor(private leaveTypeService:LeaveTypeService){
    
  }

  createLeaveType():void{
    this.leaveTypeService.createLeaveType(this.leaveType)
        .subscribe(data =>{
          alert("LeaveType created successfully")
        });
  }
  ngOnInit() {
  }

}
