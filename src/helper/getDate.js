const d = new Date();
let endpointDateTimeISO8061 = '-12-31T12:00:00.000+07:00';

export const myGetDate = () => {
  let date = [
    '0',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];
  let month = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  let result =
    d.getFullYear() + '-' + month[d.getMonth()] + '-' + date[d.getDate()];
  return result;
};

export const getDateTimeISO8601OfCurrent = () => {
  let currentYear = d.getFullYear();
  let DateTimeISO8601Current = `${currentYear}`.concat(endpointDateTimeISO8061);
  return DateTimeISO8601Current;
};
export const getDateTimeISO8601OfLastYear = () => {
  let lastYear = d.getFullYear() - 1;
  let DateTimeISO8601LastYear = `${lastYear}`.concat(endpointDateTimeISO8061);
  return DateTimeISO8601LastYear;
};
export const getDateTimeISO8601OfLastOfLastYear = () => {
  let lastOfLastYear = d.getFullYear() - 2;
  let DateTimeISO8601LastOfLastYear = `${lastOfLastYear}`.concat(
    endpointDateTimeISO8061
  );
  return DateTimeISO8601LastOfLastYear;
};
