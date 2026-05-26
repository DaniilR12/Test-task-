import { Button, Card, Col, Row, Space } from "antd";

import SegmentedComponent from "./SegmentedComponent";
import { CoinChart } from "./CoinChart";

export function ChartComponent({ manualRefresh, handleRefresh, setCoinId, coinId, options, isLoading, chartData }) {
    return (
        <Card style={{ overflow: "hidden" }}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                <Row justify="center">
                    <Button loading={manualRefresh} onClick={handleRefresh}>
                        Оновити
                    </Button>
                </Row>
                <Row align="top" gutter={16}>
                    <Col>
                        <SegmentedComponent
                            onChange={setCoinId}
                            value={coinId}
                            options={options}
                        />
                    </Col>
                    <Col flex="auto">
                        <CoinChart
                            loading={isLoading || manualRefresh}
                            data={chartData}
                        />
                    </Col>
                </Row>

            </Space>
        </Card>
    );
}
