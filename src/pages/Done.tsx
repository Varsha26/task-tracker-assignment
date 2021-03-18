import Button from 'antd/lib/button';
import Table from 'antd/lib/table/Table';
import React, { useContext } from 'react'
import "../App.scss"
import CreateForm from './createForm';
import { UserInfoDetails } from './interface';
import UserContext from './UserContext';
function Done() {
    const contextValues = useContext(UserContext);
    debugger;
    let list: UserInfoDetails[] = contextValues.doneItems;
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
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
          },
        {
          title: 'Project',
          dataIndex: 'project',
          key: 'project',
        },
        {
            title: 'Created On',
            dataIndex: 'createdOn',
            key: 'createdOn',
          }
      ];
    return (
        <div className="home">
            <span className="heading">
                <p>List of all completed task</p>
                <Table style={{marginBottom: '100%'}} columns={columns} dataSource={list} />
            </span>
        </div >
    )
}

export default Done