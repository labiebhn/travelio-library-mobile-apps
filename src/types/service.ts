export type PaginationStatus = 'next' | 'disabled' | 'reset' | 'refresh';

export type PaginationData = {
  offset: number;
  limit: number;
  hasNextPage: boolean;
};

export type LoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';

export type InitialState = {
  loading: LoadingType;
  data: any;
  message: any;
  pagination: PaginationData;
  [key: string]: any;
}
