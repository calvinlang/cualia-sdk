export const isNumber = (value: any) => {
  if (value === '') return false;
  return !Number.isNaN(Number(value));
};

export const isNumbers = (values: any[]) => {
  return values.reduce((acc, value) => {
    if (!isNumber(value)) return false;
    return acc;
  }, true);
};
