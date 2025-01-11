import {useState} from 'react';
import {InitialState, PaginationStatus} from '../types/service';
import {
  OpenLibraryFieldWhitelist,
  PaginateTypeForReset,
} from '../constants/service';
import {errorMessage} from '../utils/helpers';

const initialState: InitialState = {
  loading: 'idle',
  message: '',
  data: [],
  pagination: {
    limit: 10,
    offset: 0,
    hasNextPage: true,
  },
};

export const useGetListService = (
  respository: (...args: any[]) => Promise<any>,
) => {
  const [state, setState] = useState<InitialState>(initialState);

  const service = async (
    key: string,
    paginate: PaginationStatus,
    params?: any,
    ...args: any[]
  ) => {
    try {
      // Validate bussy service
      if (state.loading === 'pending') return;

      // Validate fetch for next page
      if (!state.pagination?.hasNextPage && paginate === 'next') return;

      // Loading state
      setState(prev => ({...prev, loading: 'pending'}));

      // Pagination config
      params.limit = state.pagination.limit;
      if (PaginateTypeForReset.includes(paginate)) {
        params.offset = 0;
      } else {
        params.offset = state?.offset ? Number(state.offset) * 2 : 0;
      }

      // Whitelist field openlibrary api
      params.fields = OpenLibraryFieldWhitelist;

      // Fetch API
      const {data: result} = await respository(params, ...args);

      console.log({result, params});

      let payload: InitialState = {...state, loading: 'succeeded'};

      // Fill fetched data
      const data = result?.[key] || [];
      if (PaginateTypeForReset.includes(paginate)) {
        payload.data = data;
      } else {
        payload.data = [...payload.data, ...data];
      }

      // Fill pagination data
      payload.pagination.hasNextPage = Boolean(data.length);
      payload.pagination.offset = Number(result?.offset || 0);

      // Update state
      setState(payload);

      return Promise.resolve(payload.data);
    } catch (error) {
      // Catch error message
      const message = errorMessage(error);
      let payload: InitialState = {...state, loading: 'failed', message};
      payload.pagination.hasNextPage = false;
      setState(payload);

      return Promise.reject(error);
    }
  };

  return {state, service};
};
