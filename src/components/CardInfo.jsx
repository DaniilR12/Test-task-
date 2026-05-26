import { Button, Card, Divider, Descriptions, Space } from "antd";

export function CardInfo({ formInfo, handleReset }) {
    return (
        <Card size="medium" title="Submitted Information">

            <Descriptions column={1} bordered size="small">
                <Descriptions.Item label="Name">
                    {formInfo.name}
                </Descriptions.Item>

                <Descriptions.Item label="Email">
                    {formInfo.email}
                </Descriptions.Item>

                <Descriptions.Item label="Country">
                    {formInfo.country}
                </Descriptions.Item>

                <Descriptions.Item label="Age">
                    {formInfo.age}
                </Descriptions.Item>
            </Descriptions>

            <Divider />

            <Space direction="vertical" style={{ width: "100%" }}>
                <Button type="primary" block onClick={handleReset}>
                    Start Again
                </Button>
            </Space>

        </Card>
    );
}