import { Component, OnInit } from '@angular/core';
import { Status } from '../../Models/status.model';
import { StatusService } from '../../Service/status.service';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {

  statuses: Status[];

  constructor(private statusService: StatusService) {

  }

  ngOnInit() {
    this.statusService.getAllStatus()
      .subscribe(data => {
        
        this.statuses  = data;
        console.log(data);
      });
  }

}
