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
