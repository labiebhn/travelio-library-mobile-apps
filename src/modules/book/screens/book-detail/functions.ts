import {useMemo} from 'react';
import {
  getBookAuthor,
  getBookCover,
  getBookRating,
} from '../../../../utils/helpers';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {shallowEqual} from 'react-redux';
import {setWishlist} from '../../store/bookSlice';

export const useBookDetail = (props: any) => {
  const {
    route: {params},
  } = props;
  const {data} = params;

  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(state => state.book.wishlist, shallowEqual);

  const hasSaved = useMemo(() => {
    return wishlist.some(list => list?.key === data?.key);
  }, [data, wishlist]);

  const coverUri = useMemo(() => {
    return getBookCover(data?.editions);
  }, [data?.editions]);

  const authorName = useMemo(() => {
    return getBookAuthor(data?.author_name);
  }, [data?.author_name]);

  const rating = useMemo(() => {
    return getBookRating(data?.ratings_count, data?.already_read_count);
  }, [data?.ratings_count, data?.already_read_count]);

  const handleWishlist = () => {
    dispatch(setWishlist(data));
  };

  return {
    data,
    coverUri,
    authorName,
    rating,
    hasSaved,
    action: {handleWishlist},
  };
};

export type UseBookDetail = ReturnType<typeof useBookDetail>;
