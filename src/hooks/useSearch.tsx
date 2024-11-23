import { useQuery } from "@tanstack/react-query";
import { fetchSearchResults } from "../api/search";

export const useSearch = (searchTerm: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => fetchSearchResults(searchTerm),
    enabled: searchTerm.length >= 3,
  });

  return { data, isLoading, isError };
};
