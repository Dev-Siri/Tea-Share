export function getRandomColor() {
  const MAX_COLOR_VALUE = 16777215;
  const COLOR_STRING_LENGTH = 6;
  const color = Math.floor(Math.random() * MAX_COLOR_VALUE).toString(16);

  return `#${"0".repeat(COLOR_STRING_LENGTH - color.length) + color}`;
}
