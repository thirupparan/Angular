import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../Service/status.service';
import { Status } from '../../Models/status.model';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {

  status: Status=new Status();
  

  constructor(private statusService:StatusService){
    
  }

  createStatus():void{
    this.statusService.createStatus(this.status)
        .subscribe(data =>{
          alert("Status created successfully")
        });
  }

  ngOnInit() {
  }

}
