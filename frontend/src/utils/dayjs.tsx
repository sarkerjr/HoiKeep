import dayjs from 'dayjs';

export const generalFormat = (date: Date) => {
  return dayjs(date).format('DD MMM, YYYY');
};

export default dayjs;
