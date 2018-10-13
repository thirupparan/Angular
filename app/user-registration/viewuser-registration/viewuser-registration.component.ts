import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-viewuser-registration',
  templateUrl: './viewuser-registration.component.html',
  styleUrls: ['./viewuser-registration.component.css']
})
export class ViewuserRegistrationComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getAllUser()
      .subscribe(data => {
        this.users = data;
        // alert(data);

      });
  }


}
