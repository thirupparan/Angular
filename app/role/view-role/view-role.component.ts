import { Component, OnInit } from '@angular/core';
import { Role } from '../../Models/role.model';
import { RoleService } from '../../Service/role.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  roles:Role[];

  constructor(private roleService:RoleService){

  }

    ngOnInit() {
      this.roleService.getAllRoles()
      .subscribe( data => {
        this.roles = data;
        console.log(data);
      });
    }

}
