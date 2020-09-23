export const safeString = (value: unknown, defaultValue = ''): string => String(value || defaultValue);

export const safeNumber = (value: unknown, defaultValue = 0): number => Number(value || defaultValue);
