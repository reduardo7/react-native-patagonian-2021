export function formatDate(date: Date | string, format = 'H:M:S | Y-m-d') {
  if (date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    const H = date.getHours().toString().padStart(2, '0');
    const M = date.getMinutes().toString().padStart(2, '0');
    const S = date.getSeconds().toString().padStart(2, '0');
    const Y = date.getFullYear().toString();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');

    return format
      .replace(/H/g, H)
      .replace(/M/g, M)
      .replace(/S/g, S)
      .replace(/Y/g, Y)
      .replace(/m/g, m)
      .replace(/d/g, d);
  }

  return '[INVALID DATE]';
}
