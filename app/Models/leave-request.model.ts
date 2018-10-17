export class LeaveRequest {


	userId: number;
	leaveTypeId: number;
	startDate: Date;
	endDate: Date;
	reason: String;
	leaveDays: number;

	// leave Approval
	statusId: number;
	recommendedBy: number;
	approvedBy: number;


	public getleaveDays() {
		var starting = new Date(this.startDate);
		var end = new Date(this.endDate);
		var leaveDays = end.getTime() - starting.getTime();
		var days = leaveDays / (1000 * 60 * 60 * 24) + 1;
		console.log(days);
		this.leaveDays = days;
		this.startDate = new Date(this.startDate);
		this.endDate= new Date(this.endDate);
		this.userId=1;
		return days;
	}
}
