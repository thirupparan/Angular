import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Service/role.service';
import { DepartmentService } from 'src/app/Service/department.service';
import { Role } from 'src/app/Models/role.model';
import { Department } from 'src/app/Models/department.model';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-adduser-registration',
  templateUrl: './adduser-registration.component.html',
  styleUrls: ['./adduser-registration.component.css']
})
export class AdduserRegistrationComponent implements OnInit {

  roles: Role[];
  departments: Department[];
  user: User = new User();


  constructor(private roleService: RoleService, private departmentService: DepartmentService,private userService:UserService) { }

  ngOnInit() {
    this.getRoles();
    this.getDepartments();
  }

  getRoles() {
    this.roleService.getAllRoles()
      .subscribe(data => {
        this.roles = data;
        //  alert(data);
      });
  }

  getDepartments() {

    this.departmentService.getAllDepartment()
      .subscribe(data => {
        this.departments = data;
        //alert(data);

      });
  }

  createUser() :void{
    // var x = this.user.joinDate;
    // this.user.joinDate=x+":14.036+05:30";
    this.user.joinDate= new Date(this.user.joinDate);
    console.log(this.user);

    this.userService.createUser(this.user)
        .subscribe(data =>{
          alert("User created successfully")
        });
 
    
  }
}
