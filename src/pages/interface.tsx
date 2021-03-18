export interface UserInfo {
    items: UserInfoDetails[];
    updateUserInfo: (items: UserInfoDetails) => void;
    inprogressItems: UserInfoDetails[];
    doneItems: UserInfoDetails[];
    updateInprogressItems: (items: UserInfoDetails) => void;
    updateDoneItems: (items: UserInfoDetails) => void;
}
export interface UserInfoDetails {
    company: string;
    priority: string;
    project: string;
    taskdesc: string;
    taskname: string;
    taskId: string;
    status: string;
    completedOn: string;
    createdOn: string;
    record: UserInfoDetails;

}