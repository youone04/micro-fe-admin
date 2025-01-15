import { LayoutCards } from "../../../components/cards/LayoutCard";
//form
import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Tag } from 'antd';
const customizeRequiredMark = (label, { required }) => (
    <>
        {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
        {label}
    </>
);

export default function PageHomeCreate({navigate}) {
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };
    return (
        <LayoutCards title="Create admin">
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    requiredMarkValue: requiredMark,
                }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
            >
                
                <Form.Item label="Field A" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Field B"
                    tooltip={{
                        title: 'Tooltip with customize icon',
                        icon: <InfoCircleOutlined />,
                    }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                    <Button onClick={() => navigate(-1)} type="default" style={{ marginLeft: 8 }}>Back</Button>
                </Form.Item>
            </Form>
        </LayoutCards>
    );
}