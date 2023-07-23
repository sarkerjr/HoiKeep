function removeSpecialChars(str: string) {
  return str.replace(/[^\w\s]/gi, '').toLowerCase();
}

export function hasValue(obj, searchValue) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const propValue = obj[prop];

      if (typeof propValue === 'string' || typeof propValue === 'number') {
        if (
          removeSpecialChars(String(propValue)) ===
          removeSpecialChars(String(searchValue))
        ) {
          return true;
        }
      } else if (typeof propValue === 'object' && !Array.isArray(propValue)) {
        if (hasValue(propValue, searchValue)) {
          return true;
        }
      }
    }
  }

  return false;
}
