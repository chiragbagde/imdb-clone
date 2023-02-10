const input = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0];
const width = 50;
const height = 50;
const padding = 10;

const svg = document.querySelector("#water-svg");
const maxHeight = Math.max(...input) * height;
svg.setAttribute("width", (input.length + 1) * (width + padding));
svg.setAttribute("height", maxHeight + height + padding);

input.forEach((block, i) => {
  const blockElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  blockElement.setAttribute("x", i * (width + padding));
  blockElement.setAttribute("y", maxHeight - block * height + padding);
  blockElement.setAttribute("width", width);
  blockElement.setAttribute("height", block * height);
  blockElement.setAttribute("fill", "blue");
  svg.appendChild(blockElement);
});
