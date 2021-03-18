
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import Inprogress from './Inprogress'
import Done from './Done'
import Home from './Home'
import Todo from './ToDo'
import { UserInformationProvider } from './UserContext'
import { UserInfoDetails } from './interface'

export const Dashboard = () => {
    const [items, setuserInfo] = useState<UserInfoDetails[]>([]);
    const [inprogressItems, setInprogressItems] = useState<UserInfoDetails[]>([]);
    const [doneItems, setDoneItems] = useState<UserInfoDetails[]>([]);
    const updateUserInfo = (_userInfo: UserInfoDetails) => {
        setuserInfo([
            ...items, 
            {
                ..._userInfo
            }
        ]);
    };
    const updateInprogressItems = (_userInfo: UserInfoDetails) => {
        let obj: UserInfoDetails ={
            company: _userInfo.record.company,
            createdOn: _userInfo.record.createdOn,
            priority: _userInfo.record.priority,
            project: _userInfo.record.project,
            status: _userInfo.record.status,
            taskId: _userInfo.record.taskId,
            taskdesc: _userInfo.record.taskdesc,
            taskname: _userInfo.record.taskname,
            completedOn: '',
            record: _userInfo.record
        }
        setInprogressItems([
            ...inprogressItems, 
            {
                ...obj
            }
        ]);
    };
    const updateDoneItems = (_userInfo: UserInfoDetails) => {
        debugger;
        let obj: UserInfoDetails ={
            company: _userInfo.record.company,
            createdOn: _userInfo.record.createdOn,
            priority: _userInfo.record.priority,
            project: _userInfo.record.project,
            status: _userInfo.record.status,
            taskId: _userInfo.record.taskId,
            taskdesc: _userInfo.record.taskdesc,
            taskname: _userInfo.record.taskname,
            completedOn: '',
            record: _userInfo.record
        }
        setDoneItems([
            ...doneItems, 
            {
                ...obj
            }
        ]);
    };
    const contextValues = {
        items,
        updateUserInfo,
        inprogressItems,
        updateInprogressItems,
        doneItems,
        updateDoneItems
    }
    return (
        <UserInformationProvider value={contextValues}>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/dashboard/home" component={Home} />
                    <Route path="/dashboard/todo" component={Todo} />
                    <Route path="/dashboard/inprogress" component={Inprogress} />
                    <Route path="/dashboard/done" component={Done} />
                </Switch>
            </BrowserRouter>
        </UserInformationProvider>
    )
}