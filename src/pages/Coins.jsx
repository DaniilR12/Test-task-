import { useCoins } from "../hooks/useCoins";

import { TableComponent } from "../components/TableComponent";

function Coins() {
    const { isLoading, error, data } = useCoins()

    return (
        <TableComponent data={data} pagination={false} loading={isLoading} error={error} />
    );
}

export default Coins;
