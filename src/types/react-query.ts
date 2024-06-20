type GetQueryData = (data?: any) => {
  queryKey: unknown[];
  queryFn: () => unknown;
};

export type QueryReturnData<TGetQueryData extends GetQueryData> = ReturnType<
  ReturnType<TGetQueryData>["queryFn"]
> extends Promise<infer U>
  ? U
  : never;
