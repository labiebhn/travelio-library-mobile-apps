import {useGetListService} from '../hooks/service';
import {BOOK} from '../repository';
import {PaginationStatus} from '../types/service';

export const useGetLibrary = () => {
  const {state, service} = useGetListService(BOOK.getLibrary);
  return {
    library: state,
    libraryService: (paginate: PaginationStatus, params: any) =>
      service('docs', paginate, params),
  };
};
