import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RoleComponent } from './role/role.component';
import { DepartmentComponent } from './department/department.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { StatusComponent } from './status/status.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ApplyLeaveRequestComponent } from './LeaveRequest/apply-leave-request/apply-leave-request.component';
import { LeaveHistoryComponent } from './LeaveRequest/leave-history/leave-history.component';
import { LeaveStatisticsComponent } from './LeaveRequest/leave-statistics/leave-statistics.component';
import { CancelLeaveRequestComponent } from './LeaveRequest/cancel-leave-request/cancel-leave-request.component';
import { ProcessLeaveRequestComponent } from './LeaveRequest/process-leave-request/process-leave-request.component';
import { ApplyCarryForwardComponent } from './carryForward/apply-carry-forward/apply-carry-forward.component';
import { ProcessCarryForwardComponent } from './carryForward/process-carry-forward/process-carry-forward.component';

const routes: Routes = [
  { path: 'roles', component: RoleComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'leaveType', component: LeaveTypeComponent  },
  { path: 'status', component: StatusComponent },
  { path: 'users', component: UserRegistrationComponent },
  { path: 'applyLeaveRequest', component: ApplyLeaveRequestComponent },
  { path: 'leaveHistory', component: LeaveHistoryComponent },
  { path: 'leaveStatistics', component: LeaveStatisticsComponent },
  { path: 'cancelLeaveRequest', component: CancelLeaveRequestComponent },
  { path: 'processLeaveRequest', component: ProcessLeaveRequestComponent},
  { path: 'applyCarrtForward', component: ApplyCarryForwardComponent },
  { path: 'processCarryForward', component: ProcessCarryForwardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }