import axios from "axios";
import { Hit } from "../types/searchTypes";

const searchInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Fetches search results based on the provided search term.
 *
 * @param {string} term - The search term to query.
 * @returns {Promise<Hit[]>} - A promise that resolves to an array of search results (hits).
 *
 */
export const fetchSearchResults = async (term: string): Promise<Hit[]> => {
  const response = await searchInstance.get(`/search?query=${term}`);
  return response.data.hits;
};
