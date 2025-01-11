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
