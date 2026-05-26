import { useState } from "react";

import { useCoins } from "../hooks/useCoins";

import { TableComponent } from "../components/TableComponent";

export function CoinsPaged() {
    const [page, setPage] = useState(1)
    const { isLoading, error, data } = useCoins(20, page)
    return (
        <TableComponent data={data} pagination={{
            current: page,
            pageSize: 20,
            total: 400,
            showSizeChanger: false,
            position: ["bottomCenter"],
            onChange: (newPage) => {
                setPage(newPage);
            },
        }} loading={isLoading} error={error} />
    )
}
