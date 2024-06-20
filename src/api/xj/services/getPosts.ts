import { get } from "@/lib/axios";
import { XjPostResponse } from "../types";

export const getPosts = async () => {
  const response = await get<XjPostResponse>(
    "https://xtreme-jumps.eu/api/news/last-news?page=0"
  );
  return response;
};
