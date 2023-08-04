import dayjs from 'dayjs';

export function hasValue(obj, searchValue) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === 'object' && value !== null) {
        if (hasValue(value, searchValue)) {
          return true;
        }
      } else if (
        String(value).toLowerCase().includes(String(searchValue).toLowerCase())
      ) {
        return true;
      }
    }
  }

  return false;
}

interface MonthYear {
  month: number;
  year: number;
}

export function getMonthsBetween(startDate: Date, endDate: Date): MonthYear[] {
  let start = dayjs(startDate);
  let end = dayjs(endDate);
  let months: MonthYear[] = [];

  for (let year = start.year(); year <= end.year(); year++) {
    let monthStart = year === start.year() ? start.month() : 0;
    let monthEnd = year === end.year() ? end.month() : 11;
    for (let month = monthStart; month <= monthEnd; month++) {
      months.push({ month: month + 1, year: year });
    }
  }
  return months;
}
