import Button from 'antd/lib/button';
import Table from 'antd/lib/table/Table';
import React, { useContext, useEffect, useState } from 'react'
import "../App.scss"
import CreateForm from './createForm';
import { UserInfoDetails } from './interface';
import UserContext from './UserContext';
import getFormattedDate from './commonFunction';
import { Alert } from 'antd';

const ToDo = () => {
    const contextValues = useContext(UserContext);
    let list: UserInfoDetails[] = contextValues.items;
    let [_userInfoDetails, setUserState]: any[] = useState([]);
    const [successMessage, setSuccessMessage] = useState<string>();
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        console.log(_userInfoDetails);
        let items = [];
        if(list) {
            for(let i=0; i< list.length;i++) {
                let newObj:UserInfoDetails = {
                    ...list[i],
                    taskId: 'TT-00' + i,
                    status: 'todo',
                    createdOn:  getFormattedDate(new Date()),
                };
                items.push(newObj);
            }
            setUserState(items);
        }
    }, [list]);
    const onClick = (values: any) => {
        setUserState(_userInfoDetails.filter((item: any) => item.taskId !== values.record.taskId));
        contextValues.updateInprogressItems({
            ...values
        });
        setSuccessMessage('Task has been successfully moved to in progress status.');
        setShowAlert(true);
    }
    const onDelete = (values: any) => {
        setUserState(_userInfoDetails.filter((item: any) => item.taskId !== values.record.taskId));
        setSuccessMessage('Task has been successfully deleted.');
        setShowAlert(true);
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
