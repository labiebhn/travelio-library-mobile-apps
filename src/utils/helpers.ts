import {NO_IMAGE_URI} from '../constants/app';

export const errorMessage = (action: any) => {
  if (typeof action === 'string') return action;
  let error = action?.paylaod || action;
  let message =
    error?.response?.data?.data?.message ??
    error?.response?.data?.meta?.message ??
    error?.response?.data?.message ??
    error?.response?.message ??
    error?.message ??
    'Server Sedang Mengalami Gangguan';

  return message;
};

export const deleteArray = (arr: any[], index: number) => {
  let arrNew = [...arr];
  arrNew.splice(index, 1);
  return arrNew;
};

export const getBookCover = (editions?: any) => {
  if (!editions) return NO_IMAGE_URI;

  const docKey = editions?.docs?.[0]?.key;
  if (!docKey) return NO_IMAGE_URI;

  const olid = docKey.split('/')?.[2];
  if (!olid) return NO_IMAGE_URI;

  return `https://covers.openlibrary.org/b/olid/${olid}.jpg`;
};

export const getBookAuthor = (author_name?: any[]) => {
  if (!author_name) return '';

  return author_name.join(', ');
};

export const getBookRating = (ratings_count?: number, already_read_count?: number) => {
  if (!ratings_count || !already_read_count) return 0;

    const averageRating = ratings_count / already_read_count;
    const convertedRating = averageRating * 4 + 1;

    return Math.min(Math.max(convertedRating, 1), 5);
}