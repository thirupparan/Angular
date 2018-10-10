import { Component, OnInit } from '@angular/core';
import { Role } from '../../Models/role.model';
import { RoleService } from '../../Service/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role: Role=new Role();
  

  constructor(private roleService:RoleService){
    
  }

  createRole():void{
    this.roleService.createRoles(this.role)
        .subscribe(data =>{
          alert("Role created successfully")
        });
  }

  ngOnInit() {
  }

}
