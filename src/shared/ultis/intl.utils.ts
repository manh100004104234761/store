export const getDisplayCurrency = (
  value: number,
  locale: string = 'vi-VN',
  options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'VND'
  }
) => {
  return new Intl.NumberFormat(locale, options).format(value);
};


export const ImageProfileUrl = `${process.env.REACT_APP_BASE_URL}/storage/profile`;
export const ImageBookUrl = `${process.env.REACT_APP_BASE_URL}/storage/book`;

