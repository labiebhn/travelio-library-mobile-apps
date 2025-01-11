import axiosInstance from '../configs/axios';

export const getLibrary = (params?: any) => {
  return axiosInstance.get('/search.json', {params});
};
