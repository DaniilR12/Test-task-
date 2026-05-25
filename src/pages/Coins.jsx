import { TableComponent } from "../components/TableComponent";
import { useCoins } from "../hooks/useCoins";


function Coins() {

    const { isLoading, error, data } = useCoins()


    return (
        <TableComponent data={data} pagination={false} loading={isLoading} error={error} />
    );
}

export default Coins;
