import { Table, Tooltip, Typography } from "antd";
const { Title, Paragraph } = Typography;

export function TableComponent({ data, pagination, loading, error }) {


    function formatCurrency(value) {
        return new Intl.NumberFormat("en", {
            notation: "compact",
            maximumFractionDigits: 2,
        }).format(value);
    }

    const columns = [
        {
            title: '#',
            dataIndex: 'market_cap_rank',
            key: 'rank',
            fixed: 'start',
            width: 50,
            sorter: (a, b) => a.market_cap_rank - b.market_cap_rank
        },
        {
            title: "Coin",
            key: "coin",
            width: 100,
            render: (_, coin) => (
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <img src={coin.image} alt={coin.name} width={24} />
                    <Tooltip title={coin.name}>
                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>
                            {coin.name}
                        </span>
                    </Tooltip>

                </div>
            ),
        },
        {
            title: "Price",
            dataIndex: "current_price",
            key: "price",
            width: 100,
            render: (price) => `$${price}`,
            sorter: (a, b) => a.current_price - b.current_price
        },
        {
            title: "24h %",
            dataIndex: "price_change_percentage_24h",
            key: "priceChange",
            width: 100,
            render: (volume) => {
                if (volume === null) {
                    return "N/A"
                }

                const positive = volume >= 0

                return (
                    <span style={{
                        color: positive ? "green" : "red"
                    }}>
                        {`${volume.toFixed(2)}%`}
                    </span>
                )
            },
            sorter: (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
        },
        {
            title: "Market cap",
            dataIndex: "market_cap",
            key: "marketCap",
            width: 100,
            render: (volume) => `$${formatCurrency(volume)}`,
            sorter: (a, b) => a.market_cap - b.market_cap

        },
        {
            title: "Volume 24h",
            dataIndex: "total_volume",
            key: "totalVolume",
            width: 100,
            render: (volume) => `$${formatCurrency(volume)}`,
            sorter: (a, b) => a.total_volume - b.total_volume
        }
    ]

    if (error) {
        return (
            <>
                <Title level={2}>Error loading data</Title>
                <Paragraph>{error.message}</Paragraph>
            </>

        )
    }

    return (
        <Table columns={columns} bottomCenter tableLayout="fixed" dataSource={data} rowKey="id" pagination={pagination} sticky loading={loading} />
    )
}
