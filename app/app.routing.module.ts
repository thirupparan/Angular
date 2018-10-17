import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';


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
import { ManagePrevilagesComponent } from './manage-previlages/manage-previlages.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'roles', component: RoleComponent,canActivate: [AuthGuard] },
  { path: 'department', component: DepartmentComponent,canActivate: [AuthGuard]},
  { path: 'leaveType', component: LeaveTypeComponent,canActivate: [AuthGuard]  },
  { path: 'status', component: StatusComponent,canActivate: [AuthGuard] },
  { path: 'users', component: UserRegistrationComponent,canActivate: [AuthGuard] },
  { path: 'applyLeaveRequest', component: ApplyLeaveRequestComponent,canActivate: [AuthGuard] },
  { path: 'leaveHistory', component: LeaveHistoryComponent,canActivate: [AuthGuard] },
  { path: 'leaveStatistics', component: LeaveStatisticsComponent,canActivate: [AuthGuard] },
  { path: 'cancelLeaveRequest', component: CancelLeaveRequestComponent,canActivate: [AuthGuard] },
  { path: 'processLeaveRequest', component: ProcessLeaveRequestComponent,canActivate: [AuthGuard]},
  { path: 'applyCarrtForward', component: ApplyCarryForwardComponent,canActivate: [AuthGuard] },
  { path: 'processCarryForward', component: ProcessCarryForwardComponent,canActivate: [AuthGuard]},
  { path: 'privileges', component: ManagePrevilagesComponent,canActivate: [AuthGuard]},
  
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: ''}
  
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