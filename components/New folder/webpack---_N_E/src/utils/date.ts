export function formatDuration(duration: number): string {
  // Convert milliseconds to years, days, hours, and minutes
  const years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor(
    (duration % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24),
  );
  const hours = Math.floor(
    (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  // Construct the formatted string
  let formattedDuration = '';

  if (years > 0) {
    formattedDuration += years + 'y ';
  }

  if (days > 0) {
    formattedDuration += days + 'd ';
  }

  if (hours > 0) {
    formattedDuration += hours + 'h ';
  }

  if (minutes > 0 || (days === 0 && hours === 0)) {
    formattedDuration += minutes + 'min';
  }

  return formattedDuration.trim();
}

export function getDaysFromDuration(duration: number): number {
  return Math.floor(duration / 1000 / 60 / 60 / 24);
}
