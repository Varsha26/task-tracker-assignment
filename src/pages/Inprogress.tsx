import { Alert, Button } from 'antd';
import Table from 'antd/lib/table/Table';
import React, { useContext, useEffect, useState } from 'react'
import "../App.scss"
import { UserInfoDetails } from './interface';
import UserContext from './UserContext';
import getFormattedDate from './commonFunction';
function Inprogress() {
    const [successMessage, setSuccessMessage] = useState<string>();
    const contextValues = useContext(UserContext);
    const [showAlert, setShowAlert] = useState(false);
    
    debugger;
    let list: UserInfoDetails[] = contextValues.inprogressItems;
    let [_userInfoDetails, setUserState]: any[] = useState([]);
    useEffect(() => {
        console.log(_userInfoDetails);
        let items = [];
        if(list) {
            for(let i=0; i< list.length;i++) {
                let newObj:UserInfoDetails = {
                    ...list[i],
                    status: 'inprogress',
                    createdOn:  getFormattedDate(new Date()),
                };
                items.push(newObj);
            }
            setUserState(items);
        }
    }, [list]);
    const onClick = (values: any) => {
        setUserState(_userInfoDetails.filter((item: any) => item.taskId !== values.record.taskId));
        contextValues.updateDoneItems({
            ...values
        });
        setSuccessMessage('Task has been successfully moved to completed status.');
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
                <Table style={{marginBottom: '100%'}} columns={columns} dataSource={_userInfoDetails} />
            </span>
        </div >
    )
}

export default Inprogress
