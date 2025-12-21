export type PaginationOutMeta = {
  page: number;

  pageSize: number;

  total: number;

  pages: number;
};

export type PaginationOut<T> = {
  items: T[];
  meta: PaginationOutMeta;
};
