import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './sharedComponent/top-bar/top-bar.component';
import { SideBarComponent } from './sharedComponent/side-bar/side-bar.component';
import { DashBoardComponent } from './sharedComponent/dash-board/dash-board.component';
import { RoleComponent } from './role/role.component';
import { DepartmentComponent } from './department/department.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { StatusComponent } from './status/status.component';
import { AddLeaveTypeComponent } from './leave-type/add-leave-type/add-leave-type.component';
import { ViewLeaveTypeComponent } from './leave-type/view-leave-type/view-leave-type.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { ViewRoleComponent } from './role/view-role/view-role.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { ViewStatusComponent } from './status/view-status/view-status.component';
import { AddStatusComponent } from './status/add-status/add-status.component';

import { AdduserRegistrationComponent } from './user-registration/adduser-registration/adduser-registration.component';
import { ViewuserRegistrationComponent } from './user-registration/viewuser-registration/viewuser-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ApplyLeaveRequestComponent } from './LeaveRequest/apply-leave-request/apply-leave-request.component';
import { LeaveHistoryComponent } from './LeaveRequest/leave-history/leave-history.component';
import { LeaveStatisticsComponent } from './LeaveRequest/leave-statistics/leave-statistics.component';
import { CancelLeaveRequestComponent } from './LeaveRequest/cancel-leave-request/cancel-leave-request.component';
import { ProcessLeaveRequestComponent } from './LeaveRequest/process-leave-request/process-leave-request.component';
import { ApplyCarryForwardComponent } from './carryForward/apply-carry-forward/apply-carry-forward.component';
import { ProcessCarryForwardComponent } from './carryForward/process-carry-forward/process-carry-forward.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import{DepartmentService} from './Service/department.service';
import{RoleService} from './Service/Role.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    DashBoardComponent,
    RoleComponent,
    DepartmentComponent,
    LeaveTypeComponent,
    StatusComponent,
    AddLeaveTypeComponent,
    ViewLeaveTypeComponent,
    AddRoleComponent,
    ViewRoleComponent,
    AddDepartmentComponent,
    ViewDepartmentComponent,
    ViewStatusComponent,
    AddStatusComponent,
    AdduserRegistrationComponent,
    ViewuserRegistrationComponent,
    UserRegistrationComponent,
    ApplyLeaveRequestComponent,
    LeaveHistoryComponent,
    LeaveStatisticsComponent,
    CancelLeaveRequestComponent,
    ProcessLeaveRequestComponent,
    ApplyCarryForwardComponent,
    ProcessCarryForwardComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DepartmentService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
