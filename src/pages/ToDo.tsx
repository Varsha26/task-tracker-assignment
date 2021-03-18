import Button from 'antd/lib/button';
import Table from 'antd/lib/table/Table';
import React, { useContext, useState } from 'react'
import "../App.scss"
import CreateForm from './createForm';
import { UserInfoDetails } from './interface';
import UserContext from './UserContext';
import getFormattedDate from './commonFunction';
import { Alert } from 'antd';

const ToDo = () => {
    const contextValues = useContext(UserContext);
    let list: UserInfoDetails[] = contextValues.items;
    let _userInfoDetails: UserInfoDetails[] = [];
    const [showAlert, setShowAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string>();
    if(list) {
        for(let i=0; i< list.length;i++) {
            let newObj:UserInfoDetails = {
                ...list[i],
                taskId: 'TT-00' + i,
                status: 'todo',
                createdOn:  getFormattedDate(new Date()),
            };
            _userInfoDetails.push(newObj);
        }
    }
    const onClick = (values: any) => {
        _userInfoDetails.forEach((items,index) => {
            if(items.taskId === values.record.taskId) {
                _userInfoDetails.splice(index,1);
            }
        })
        contextValues.updateInprogressItems({
            ...values
        });
        setSuccessMessage('Task has been successfully moved to in progress status.');
        setShowAlert(true);
    }
    const onDelete = (values: any) => {
        _userInfoDetails.forEach((items,index) => {
            if(items.taskId === values.record.taskId) {
                _userInfoDetails.splice(index,1);
            }
        })
    }
    const columns = [
        {
          title: 'Task Id',
          dataIndex: 'taskId',
          key: 'taskId',
          width: '30%',
        },
        {
          title: 'Task Name',
          dataIndex: 'taskname',
          key: 'taskname',
          width: '20%',
        },
        {
          title: 'Project',
          dataIndex: 'project',
          key: 'project',
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            key: 'priority',
          },
          {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text:any, record:any) => <Button type="primary" 
            onClick={() => onClick({record})}>Start Task</Button>,
            
          },
          {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
            render: (text:any, record:any) => <a  onClick={() => onDelete({record})}>Delete</a>,
          },
      ];
    return (
        <div className="home">
            <span className="heading">
                <p>Please find below the details of all the task created.</p>
            </span>
            <CreateForm />
            { showAlert && 
                 <Alert message={successMessage}  type="success" showIcon />}
            <Table columns={columns} dataSource={_userInfoDetails} />
        </div >
    )
}

export default ToDo
