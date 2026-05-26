import { useMemo, useState } from "react";
import { Card, } from "antd";

import { useCoinChart } from "../hooks/useCoinChart";
import { ChartComponent } from "../components/ChartComponent";

export function Chart() {
    const [coinId, setCoinId] = useState("bitcoin");

    const { isLoading, error, data, refetch } = useCoinChart(coinId);

    const options = [
        { label: "Bitcoin", value: "bitcoin" },
        { label: "Ethereum", value: "ethereum" },
        { label: "Dogecoin", value: "dogecoin" }
    ];

    const chartData = useMemo(() => {
        if (!data?.prices) return [];

        return data.prices.map(([timestamp, price]) => ({
            time: timestamp,
            price,
        }));
    }, [data]);

    const [manualRefresh, setManualRefresh] = useState(false);

    const handleRefresh = async () => {
        setManualRefresh(true);
        await refetch();
        setManualRefresh(false);
    };

    if (error) {
        return <Card>Error loading chart</Card>;
    }

    return (
        <ChartComponent
            chartData={chartData}
            coinId={coinId}
            handleRefresh={handleRefresh}
            manualRefresh={manualRefresh}
            options={options}
            isLoading={isLoading}
            setCoinId={setCoinId}
        />
    );
}