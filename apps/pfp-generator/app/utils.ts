export function getRandomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);

  return `#${"0".repeat(6 - color.length) + color}`;
}
