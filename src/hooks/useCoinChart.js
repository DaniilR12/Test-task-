import { useQuery } from "@tanstack/react-query";

const fetchCoinChart = async ({ queryKey }) => {
  const [, coinId] = queryKey;

  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coin");
  }

  return response.json();
};

export function useCoinChart(coinId) {
  return useQuery({
    queryKey: ["chart", coinId],
    queryFn: fetchCoinChart,
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
  });
}
