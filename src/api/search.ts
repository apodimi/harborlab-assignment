import axios from "axios";
import { Hit } from "../types/searchTypes";

const searchInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchSearchResults = async (term: string): Promise<Hit[]> => {
  const response = await searchInstance.get(`/search?query=${term}`);
  return response.data.hits;
};
