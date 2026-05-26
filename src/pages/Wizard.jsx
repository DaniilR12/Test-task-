import { Col, Row } from "antd";

import { FormComponent } from "../components/FormComponent";

export function Wizard() {
    return (
        <Row justify="center">
            <Col xs={24} sm={20} md={16} lg={12} span={16}>
                <FormComponent />
            </Col>
        </Row>
    )
}
