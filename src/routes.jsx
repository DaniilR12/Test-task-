import { DollarOutlined, HomeOutlined, LineChartOutlined, TableOutlined } from "@ant-design/icons";

import Home from "./pages/Home.jsx";
import Coins from "./pages/Coins.jsx";
import { CoinsPaged } from "./pages/CoinsPaged.jsx";
import { Chart } from "./pages/Chart.jsx";

export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
    { path: "/coins", label: "Coins", icon: <DollarOutlined />, element: <Coins /> },
    { path: "/coins-paged", label: "Coins-paged", icon: <TableOutlined />, element: <CoinsPaged /> },
    { path: "/chart", label: "Chart", icon: <LineChartOutlined />, element: <Chart /> },
];
