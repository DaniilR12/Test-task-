import { Spin } from "antd";
import {
    LineChart,
    Line,
    Tooltip,
    YAxis,
    XAxis,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

export function CoinChart({ data, loading }) {
    return (
        <div style={{ position: "relative", width: "100%", height: 400 }}>
            <ResponsiveContainer loading={loading} width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        opacity={0.15}
                    />

                    <XAxis
                        dataKey="time"
                        tick={{ fontSize: 12 }}
                        tickMargin={10}
                        tickFormatter={(value) =>
                            new Date(value).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })
                        }
                    />

                    <YAxis
                        tick={{ fontSize: 12 }}
                        domain={["auto", "auto"]}
                    />

                    <Tooltip
                        wrapperStyle={{
                            pointerEvents: "none",
                        }}
                        labelFormatter={(value) =>
                            new Date(value).toLocaleString([], {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })} />

                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#1677ff"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
            {loading && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.6)",
                    }}
                >
                    <Spin />
                </div>
            )}
        </div>
    );
}