export function displayDate(date: Date) {
  const now = new Date();
  console.log(now.toISOString());
  console.log(date.toISOString());
  const difference = now.getTime() - date.getTime();

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.4375);
  const years = Math.floor(months / 12);

  console.log(seconds);
  console.log(minutes);
  console.log(hours);
  console.log(days);
  console.log(weeks);
  console.log(months);
  console.log(years);

  if (seconds < 20) {
    return 'a few seconds ago';
  }
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }
  if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  if (hours < 24) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (days < 2) {
    return 'Yesterday';
  }
  if (weeks < 1) {
    return `${days} days ago`;
  }
  if (weeks < 3) {
    return 'over a week ago';
  }
  if (months < 1) {
    return `${weeks} weeks ago`;
  }
  if (months < 12) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
  return `${years} year${years > 1 ? 's' : ''} ago`;
}
