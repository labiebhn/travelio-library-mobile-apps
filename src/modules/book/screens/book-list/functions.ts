import {useEffect, useState} from 'react';
import {useGetLibrary} from '../../../../services/book';
import {PaginationStatus} from '../../../../types/service';

export const useBookList = (props: any) => {
  const {library, libraryService} = useGetLibrary();

  const [paginate, setPaginate] = useState<PaginationStatus>('reset');

  console.log({library})

  useEffect(() => {
    getData('reset');
  }, []);

  const getData = (paginate: PaginationStatus) => {
    let params = {
      q: 'Harry'
    };

    libraryService(paginate, params);
    setPaginate(paginate);
  };

  return {};
};

export type UseBookList = ReturnType<typeof useBookList>;
