import { Alert, Button, Form, Input, Modal, Select } from 'antd';
import React, { useContext, useState } from 'react'
import "../App.scss"
import TextArea from 'antd/lib/input/TextArea';
import UserContext from './UserContext';

function CreateForm() {
    const contextValues = useContext(UserContext);
    const [showAlert, setShowAlert] = useState(false);
    const { Option } = Select;
    const [createTaskForm] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    }
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string>();
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        createTaskForm.resetFields();
        setIsModalVisible(false);
    };
    const onFinish = (values: any) => {
        createTaskForm.resetFields();
        setIsModalVisible(false);
        setSuccessMessage('Task has been successfully created.');
        setShowAlert(true)
        contextValues.updateUserInfo({
            ...values
        });
      };
    
      const onReset = () => {
          createTaskForm.resetFields();
      };
    const size = 'large';
    return (
        <div>
            { showAlert && 
                 <Alert message={successMessage}  type="success" showIcon />}
            <Button type="primary" onClick={showModal} className="buttonTxt" size={size}>
                Create New Task
                </Button>
                
            <Modal title="Create Task" centered visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <Form
                    {...layout}
                    form={createTaskForm}
                    name="basic"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="company" label="Company"
                        rules={[{ required: true, message: 'Please select Company!' }]} >
                        <Select
                            placeholder="Select Company"
                            allowClear
                        >
                            <Option value="company1">company1</Option>
                            <Option value="company2">company2</Option>
                            <Option value="company3">company3</Option>
                            <Option value="company4">company4</Option>
                            <Option value="company5">company5</Option>
                            <Option value="company6">company6</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="project" label="Project"
                        rules={[{ required: true, message: 'Please select Project!' }]} >
                        <Select
                            placeholder="Select Project"
                            allowClear
                        >
                            <Option value="project1">project1</Option>
                            <Option value="project2">project2</Option>
                            <Option value="project3">project3</Option>
                            <Option value="project4">project4</Option>
                            <Option value="project5">project5</Option>
                            <Option value="project6">project6</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Task Name"
                        name="taskname"
                        rules={[{ required: true, message: 'Please input your task name!' }]} >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="priority" label="Priority"
                        rules={[{ required: true, message: 'Please select Priority!' }]} >
                        <Select
                            placeholder="Select Priority"
                            allowClear>
                            <Option value="very high">very high</Option>
                            <Option value="high">high</Option>
                            <Option value="medium">medium</Option>
                            <Option value="low">low</Option>
                            <Option value="very low">very low</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Task Name"
                        name="taskdesc"
                        rules={[{ required: true, message: 'Enter Task Description!' }]} >
                        <TextArea placeholder="Enter Task Description" />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit"  style={{marginRight: '20px'}}>
                            Submit
        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
        </Button>
                    </Form.Item>
                </Form>
            </Modal >
        </div >
    )
}

export default CreateForm
