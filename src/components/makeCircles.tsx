import { ScalePower } from "d3";
import { Node as NodeType } from "../types";

export const makeCircles = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: NodeType[],
  sizeScale: ScalePower<number, number, never>,
  handleNodeClick: (node: NodeType) => void
) => {
  // Define a minimum size for nodes since this is for mobile view
  const MIN_NODE_SIZE = 15;

  // Clear the canvas
  context.clearRect(0, 0, width, height);

  // Add click event outside the loop
  context.canvas.addEventListener("click", (event) => {
    const rect = context.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if the click is within any node
    nodes.forEach((node) => {
      if (node.x && node.y) {
        const nodeSize = Math.max(sizeScale(node.size), MIN_NODE_SIZE);
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= nodeSize) {
          handleNodeClick(node);
        }
      }
    });
  });

  // Draw the nodes
  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }

    // Ensure the size is not below the minimum size
    const nodeSize = Math.max(sizeScale(node.size), MIN_NODE_SIZE);

    context.beginPath();
    context.moveTo(node.x + 12, node.y);
    context.arc(node.x, node.y, nodeSize, 0, 2 * Math.PI);
    context.fillStyle = node.color;
    context.fill();

    // Draw the label
    const fontSize = 13; // Set your desired font size
    context.font = `${fontSize}px Lato, sans-serif`;
    context.fillStyle = "rgba(0, 0, 0, 0.75)";
    const textWidth = context.measureText(node.label).width;
    const backgroundWidth = textWidth;
    const backgroundHeight = fontSize;
    const textX = node.x - textWidth / 2;
    context.fillRect(
      node.x - backgroundWidth / 2,
      node.y - fontSize / 2,
      backgroundWidth,
      backgroundHeight
    );

    context.fillStyle = "white";
    context.fillText(node.label, textX, node.y + fontSize / 2);
  });
};
