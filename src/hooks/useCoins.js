import { useQuery } from "@tanstack/react-query";

const fetchCoins = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coins");
  }

  return response.json();
};

export function useCoins() {
  return useQuery({
    queryKey: ["coins"],
    queryFn: fetchCoins,
  });
}
