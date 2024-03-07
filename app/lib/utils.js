export function randomColor() {
  const brightColors = [
    "#FF5733", // Bright orange
    "#FFC300", // Bright yellow
    "#DAF7A6", // Light green
    "#FFC0CB", // Pink
    "#7D3C98", // Dark purple
    "#3498DB", // Bright blue
    "#F1C40F", // Vivid yellow
    "#E74C3C", // Bright red
    "#58D68D", // Light green
    "#F8C471", // Light orange
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return brightColors[getRandomInt(0, brightColors.length - 1)];
}
