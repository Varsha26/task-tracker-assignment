import { createContext } from 'react';
import { UserInfo, UserInfoDetails } from './interface';
const UserContext = createContext<UserInfo>({
    items: [],
    updateUserInfo: (items: UserInfoDetails) => {},
    inprogressItems: [],
    updateInprogressItems: (items: UserInfoDetails) => {},
    doneItems: [],
    updateDoneItems: (items: UserInfoDetails) => {},
});
export const UserInformation = UserContext.Consumer;
export const UserInformationProvider = UserContext.Provider;
export default UserContext;