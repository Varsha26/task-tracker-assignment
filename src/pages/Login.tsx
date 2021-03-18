import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../styles/Login.scss'
import { useHistory } from 'react-router-dom';
import "../App.scss"
export const Login = () => {
    let history: any = useHistory();
    const [successMessage, setSuccessMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        fetch('https://reqres.in/api/users/2').then(response => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                if (jsonData && jsonData.data) {
                    localStorage.setItem("userValue", JSON.stringify(jsonData.data));
                    //If values.username = Janet and values.password = Weaver then login to application.
                    if (jsonData.data.first_name === values.username.replace(/\s+/g,'') && jsonData.data.last_name === values.password) {
                        history.push('/dashboard')
                    } else {
                        setSuccessMessage('Invalid Credentials');
                        setShowAlert(true);
                    }
                }
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    };
    return (
        <div className="site-card-border-less-wrapper">
           
            <Row>
                <Col md={{ span: 12, offset: 6 }}>
                    <Card title="Welcome To Login Page" bordered={false}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password" />
                            </Form.Item>
                            { showAlert && 
                                <Alert message={successMessage}  type="error" showIcon />}
                            <Form.Item>  
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );

}
