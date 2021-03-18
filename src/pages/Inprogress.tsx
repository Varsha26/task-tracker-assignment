import { Alert, Button } from 'antd';
import Table from 'antd/lib/table/Table';
import React, { useContext, useState } from 'react'
import "../App.scss"
import { UserInfoDetails } from './interface';
import UserContext from './UserContext';
function Inprogress() {
    const [successMessage, setSuccessMessage] = useState<string>();
    const contextValues = useContext(UserContext);
    const [showAlert, setShowAlert] = useState(false);
    debugger;
    let list: UserInfoDetails[] = contextValues.inprogressItems;
    const onClick = (values: any) => {
        list.forEach((items,index) => {
            if(items.taskId === values.record.taskId) {
                list.splice(index,1);
            }
        })
        contextValues.updateDoneItems({
            ...values
        });
        setSuccessMessage('Task has been successfully moved to completed status.');
        setShowAlert(true);
    }
    const onDelete = (values: any) => {
        list.forEach((items,index) => {
            if(items.taskId === values.record.taskId) {
                list.splice(index,1);
            }
        })
        contextValues.updateDoneItems({
            ...values
        });
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
            render: (text:any, record:any) => <Button type='primary'  onClick={() => onClick({record})}>Completed</Button>,
          },
          {
            title: 'Remove',
            dataIndex: 'remove',
            key: 'remove',
            render: (text:any, record:any) => <a  onClick={() => onDelete({record})}>Delete</a>,
          },
      ];
    return (
        <div className="home">
            <span className="heading">
                <p>List of all In Progress List</p>
                { showAlert && 
                 <Alert message={successMessage}  type="success" showIcon />}
                <Table style={{marginBottom: '100%'}} columns={columns} dataSource={list} />
            </span>
        </div >
    )
}

export default Inprogress
