import day from 'dayjs';

export const convertDateToString = (currentTime: Date) => {
  return day(currentTime).format('YYYY-MM-DDTHH:mm');
};
