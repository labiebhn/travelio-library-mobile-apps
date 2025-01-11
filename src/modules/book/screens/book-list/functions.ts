import {useEffect, useState} from 'react';
import {useGetLibrary} from '../../../../services/book';
import {PaginationStatus} from '../../../../types/service';
import {MIN_KEYWORD_LENGTH} from '../../../../constants/app';

export const useBookList = (props: any) => {
  const {library, libraryService} = useGetLibrary();
  const {loading, data} = library;

  const [keyword, setKeyword] = useState('');
  const [paginate, setPaginate] = useState<PaginationStatus>('reset');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getData('reset');
  }, [keyword]);

  useEffect(() => {
    if (refreshing && loading !== 'pending') {
      setRefreshing(false);
    }
  }, [refreshing, loading]);

  const onRefresh = () => {
    setRefreshing(true);
    getData('refresh');
  };

  const getData = (paginate: PaginationStatus) => {
    if (keyword.length < MIN_KEYWORD_LENGTH) return;

    let params = {
      q: keyword,
    };

    libraryService(paginate, params);
    setPaginate(paginate);
  };

  return {
    loading,
    data,
    paginate,
    refreshing,
    keyword,
    action: {getData, onRefresh, setKeyword},
  };
};

export type UseBookList = ReturnType<typeof useBookList>;
