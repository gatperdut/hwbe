export type PaginationResponseMeta = {
  page: number;

  pageSize: number;

  total: number;

  pages: number;
};

export type PaginationResponse<T> = {
  items: T[];
  meta: PaginationResponseMeta;
};
