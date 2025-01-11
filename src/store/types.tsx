export type LoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';

export default interface InitialState {
  loading: LoadingType;
  data?: any;
  message?: any;
  [key: string]: any;
}
