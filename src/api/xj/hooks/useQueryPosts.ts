import { QueryReturnData } from "@/types";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getPosts } from "../services";

// type ReturnData = QueryReturnData<typeof getQueryData>;

export const useQueryPosts = (options: Omit<UseQueryOptions, "queryKey">) => {
  const { enabled = true, ...restOptions } = options;
  const hasPermissions = true;

  return useQuery({
    queryKey: ["getPosts"],
    queryFn: () => getPosts(),

    staleTime: Infinity,
    enabled: hasPermissions && enabled,
    ...restOptions,
  });
};
