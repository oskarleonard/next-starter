export function getLocalDateMonthDYYYY(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const enforceDoubleDigitDate = (date) =>
  date?.getDate() < 10 ? `0${date?.getDate()}` : date?.getDate();

const monthsShort = [
  'jan',
  'feb',
  'mar',
  'apr',
  'maj',
  'jun',
  'jul',
  'aug',
  'sep',
  'okt',
  'nov',
  'dec',
];

export function getDD_MMM_DD_MMM(startDate, endDate) {
  const start = new Date(startDate);
  const startDay = enforceDoubleDigitDate(start);
  const startMonth = monthsShort[start.getMonth()];

  const end = new Date(endDate);
  const endDay = enforceDoubleDigitDate(end);
  const endMonth = monthsShort[end.getMonth()];

  return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
}
