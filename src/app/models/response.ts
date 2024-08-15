export interface ApiResponse<T> {
  message: string;
  response: T;
}

export interface Pagenation<T> {
  pagination: PagenationInfo;
  data:T[];
}

export interface PagenationInfo{
  currentPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
}