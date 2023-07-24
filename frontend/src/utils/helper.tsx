function removeSpecialChars(str: string) {
  return str.replace(/[^\w\s]/gi, '').toLowerCase();
}

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
