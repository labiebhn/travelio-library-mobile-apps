import {shallowEqual} from 'react-redux';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {setWishlist} from '../../store/bookSlice';

export const useBookWishlist = (props: any) => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(state => state.book.wishlist, shallowEqual);

  const handleWishlist = (item: any) => {
    dispatch(setWishlist(item));
  };

  return {wishlist, action: {handleWishlist}};
};

export type UseBookWishlist = ReturnType<typeof useBookWishlist>;
