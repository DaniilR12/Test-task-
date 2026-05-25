import { useMemo, useState } from "react";
import { Button, Card } from "antd";

import { useCoinChart } from "../hooks/useCoinChart";
import { CoinChart } from "../components/CoinChart";
import SegmentedComponent from "../components/SegmentedComponent";

export function Chart() {
    const [coinId, setCoinId] = useState('bitcoin')

    const { isLoading, error, data, refetch } = useCoinChart(coinId);

    const options = [
        {
            label: "Bitcoin",
            value: "bitcoin"
        },
        {
            label: "Ethereum",
            value: "ethereum"
        },
        {
            label: "Dogecoin",
            value: "dogecoin"
        }]

    const chartData = useMemo(() => {
        if (!data?.prices) return [];

        return data.prices.map(([timestamp, price]) => ({
            time: timestamp,
            price,
        }));
    }, [data]);

    const [manualRefresh, setManualRefresh] = useState(false)

    const handleRefresh = async () => {
        setManualRefresh(true);

        await refetch();

        setManualRefresh(false);
    };

    if (error) {
        return <Card>Error loading chart</Card>;
    }

    return (
        <Card style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button loading={manualRefresh} onClick={handleRefresh}>
                    Оновити
                </Button>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 5 }}>
                <SegmentedComponent onChange={setCoinId} value={coinId} options={options} />
                <CoinChart loading={isLoading || manualRefresh} data={chartData} />
            </div>
        </Card>
    );
}