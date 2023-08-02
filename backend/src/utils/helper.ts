export function stringToBoolean(value: string | boolean) {
  if (value ?? typeof value === 'string')
    return value === 'true' ? true : false;
  return value ?? true;
}
