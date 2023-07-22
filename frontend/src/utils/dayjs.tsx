import dayjs from 'dayjs';

export const generalFormat = (date: Date) => {
  return dayjs(date).format('DD MMM, YYYY');
};

export const inputFormat = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export default dayjs;
