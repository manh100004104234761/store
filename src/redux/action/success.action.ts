export const setSuccessNoti = (message: string) => ({
  type: 'SET_SUCCESS_NOTI',
  payload: message,
});
export const clearSuccessNoti = () => ({ type: 'CLEAR_SUCCESS_NOTI' });
