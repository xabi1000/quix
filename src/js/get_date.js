export function newDate() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long',
  });
  return formattedDate;
}
