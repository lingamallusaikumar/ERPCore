export function convertToCSV<T extends Record<string, any>>(data: T[], headers?: (keyof T)[]): string {
  if (!data || data.length === 0) {
    return '';
  }

  const keys = headers ? headers : (Object.keys(data[0]) as (keyof T)[]);
  const headerRow = keys.join(',');

  const rows = data.map(row => {
    return keys.map(key => {
      const value = row[key];
      const stringValue = value !== null && value !== undefined ? String(value) : '';
      // Escape double quotes and enclose in quotes if comma present
      if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
        return `"${stringValue.replace(/"/g, '""')}"`;
      }
      return stringValue;
    }).join(',');
  });

  return [headerRow, ...rows].join('\n');
}
