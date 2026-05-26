import { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Card } from 'antd';
import { useForm } from 'antd/es/form/Form';

import { CardInfo } from './CardInfo';

export function FormComponent() {
    const [form] = useForm();

    const [formInfo, setFormInfo] = useState(() => {
        const saved = localStorage.getItem("formInfo");
        return saved ? JSON.parse(saved) : null;
    });

    const onFinish = (values) => {
        setFormInfo(values);
        localStorage.setItem("formInfo", JSON.stringify(values));
    };

    const handleReset = () => {
        form.resetFields();
        setFormInfo(null);
        localStorage.removeItem("formInfo");
    };

    if (formInfo) {
        return (
            <CardInfo
                handleReset={handleReset}
                formInfo={formInfo}
            />
        );
    }

    return (
        <Card title="Form">
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        { required: true },
                        { min: 2 }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true },
                        { type: 'email' }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Country"
                    name="country"
                    rules={[{ required: true }]}
                >
                    <Select
                        options={[
                            { value: 'ukraine', label: 'Ukraine' },
                            { value: 'poland', label: 'Poland' },
                            { value: 'germany', label: 'Germany' },
                            { value: 'england', label: 'England' },
                            { value: 'usa', label: 'USA' },
                        ]}
                    />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                        { required: true },
                        { type: 'number', min: 18, max: 100 }
                    ]}
                >
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}