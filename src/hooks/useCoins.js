import { useQuery } from "@tanstack/react-query";

const fetchCoins = async ({ queryKey }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [, { perPage, page }] = queryKey;

  const response = await fetch(
    `${API_URL}/coins/markets?vs_currency=usd&per_page=${perPage}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coins");
  }

  return response.json();
};

export function useCoins(perPage = 50, page = 1) {
  return useQuery({
    queryKey: ["coins", { perPage, page }],
    queryFn: fetchCoins,
  });
}
