import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { createItemFunc } from '../store/servicess/createItem';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const CreateItem = () => {
    const dispatch = useDispatch();
    const initState = useSelector((state) => state);
    const navigate = useNavigate();

    const onFinish = (values) => {
        const { status } = initState.createItem;
        if(values){
            dispatch(createItemFunc({
                title: values.title,
                description: values.descraption
            }))
        }
        if(status){
            navigate("/")
        }else{
            message.error('There is an error!!!');
        }
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const renderCreateForm = () => {
        return <div>
            <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="title"
                name="title"
                rules={[{ required: true, message: 'Please input title!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="descraption"
                name="descraption"
                rules={[{ required: true, message: 'Please input descraption!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 24 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            </Form>
        </div>
    }
    
  return (
    <div className="create-item">
        {renderCreateForm()}    
        <a href="/"> Back To List </a>
    </div>
  )
};

export default CreateItem;
