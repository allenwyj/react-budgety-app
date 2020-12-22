import day from 'dayjs';

export const convertDateToString = (isoString: string) => {
  return day(isoString).format('YYYY-MM-DDTHH:mm');
};
