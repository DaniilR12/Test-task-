import { useQuery } from "@tanstack/react-query";

const fetchCoinChart = async ({ queryKey }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [, coinId] = queryKey;

  const response = await fetch(
    `${API_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=7`,
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
