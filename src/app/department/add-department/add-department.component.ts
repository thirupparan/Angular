import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../Service/department.service';
import { Department } from '../../Models/department.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  department: Department=new Department();
  

  constructor(private departmentService:DepartmentService){
    
  }

  createDeparment():void{
    this.departmentService.createDepartment(this.department)
        .subscribe(data =>{
          alert("Department created successfully")
        });
  }

  ngOnInit() {
  }
}
