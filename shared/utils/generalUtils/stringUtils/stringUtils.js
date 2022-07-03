export function getStringBetween(fullString, start, end) {
  const first = fullString?.split(start)[1];
  return first?.split(end)[0];
}
