import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../Service/department.service';
import { Department } from '../../Models/department.model';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {

  department:Department[];

  constructor(private departmentService:DepartmentService){
  
  }
  
    ngOnInit() {
      this.departmentService.getAllDepartment()
      .subscribe( data => {
        this. department = data;
        console.log(data);
      });
    }


 
}
